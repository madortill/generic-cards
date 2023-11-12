window.addEventListener('load', () => {
    let messageToPrint;
        savedMessage = sessionStorage.getItem('dataFetchingErr')
        if (String(savedMessage).includes('fetch')) {
            messageToPrint = 'no "path" parameter was found in URL';
        } else {
            messageToPrint = `no data is found. Check URL parameters\n
             Error: ${savedMessage}`
        }
    
    console.warn(messageToPrint);

});
