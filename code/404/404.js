let cardsList = [];

fetch('../../data/id-list.json')
.then((response) => {  
    response.json().then((result) => {
        for (item of result) {
            cardsList.push(item)
        }
    })
 })

window.addEventListener('load', () => {
    console.log('loaded')
    let messageToPrint;
    // print fetch error from last page
    savedMessage = sessionStorage.getItem('dataFetchingErr')
    if (String(savedMessage).includes('fetch')) {
        messageToPrint = 'no "path" parameter was found in URL';
    } else {
        messageToPrint = `no data is found. Check URL parameters\n
         Error: ${savedMessage}`
    }
    
    console.warn(messageToPrint);
    const father = El('ul', {cls: 'lomdot-list'})
    for (const id of cardsList) {
        father.append(El('li', {cls: 'li', attributes: {"data-id": id}}, 
            El("a", {attributes: {href: `https://madortill.github.io/generic-cards/code/?path=${id}`}}, 
            `https://madortill.github.io/generic-cards/code/?path=${id}`)
        ))
    }
    document.querySelector('body').append(father);
});


/**
 * @template T
 * @param {keyof HTMLElementTagNameMap} tagName 
 * @param {{classes?: string[], cls?: string, id?: string, attributes: {[index: string]: string | { toString(): string }}, listeners: Listeners}} options 
 * @param  {...string | Node} children 
 */
function El(tagName, options = {}, ...children) {
   let el = Object.assign(document.createElement(tagName), options.fields || {});
   if (options.classes && options.classes.length) el.classList.add(...options.classes);
   else if (options.cls) el.classList.add(options.cls);
   if (options.id) el.id = options.id;
   el.append(...children.filter(el => el));
   for (let listenerName of Object.keys(options.listeners || {}))
       if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
   for (let attributeName of Object.keys(options.attributes || {})) {
       if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
   }
   return el;
}