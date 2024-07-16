
/*  Edit notes:
    1. Valid card types: youtube, video-and-text, pic-and-text, text, listNumbers, listDots, freeForm
        *freeForm - write html with content key or write the tag name as key and the content as value
    2. amountOfQuestions - max number of questions from the subject that will appear in the test
    3. Title class: "sub-title" , list class: "list", place on the outer element <ol> or <ul> 
*/

let THEME;
let DATA;
let TITLE;
let TIME_FOR_EXAM;
let AMOUNT_EXAM_QUESTIONS;
let OPENING_PICTURE;
let AUTHOR;

//  Get json of data
let url = new URL(window.location.href)
let dataPath = url.pathname.split("/")[url.pathname.split("/").length - 1];
console.log(dataPath)


function purifyJSON(json) {
    for (const key in json) {
        if (typeof json[key] === 'string') {
            json[key] = DOMPurify.sanitize(json[key]);
        } else if (typeof json[key] === 'object') { /* is json is Object or Array */
        purifyJSON(json[key]);
        } 
    }
}

//  sanitize data from the server
console.time('sanitize');
purifyJSON(lomdaData)
console.timeEnd('sanitize');
console.log(lomdaData);

THEME = lomdaData.THEME;
TITLE = lomdaData.TITLE.name;
DATA = lomdaData.DATA;
TIME_FOR_EXAM = lomdaData.TIME_FOR_EXAM;
OPENING_PICTURE = lomdaData.OPENING_PICTURE;
// Max number of question in exam. Make sure it isn't more than the number of questions we have!
AMOUNT_EXAM_QUESTIONS = lomdaData.AMOUNT_EXAM_QUESTIONS;
// determine colors
AUTHOR = lomdaData.AUTHOR;

window.addEventListener("load", () => {
    changeColors();
    
    afterLoaded();
})



const changeColors = () => {
    let rootEl = document.querySelector(":root");
    rootEl.style.setProperty("--primary-color", THEME.primaryColor);
    rootEl.style.setProperty("--secondary-color", THEME.secondaryColor);
    rootEl.style.setProperty("--text-color", THEME.textColor);
    rootEl.style.setProperty("--gradient-color", THEME.gradient);
    rootEl.style.setProperty("--buttons-color", THEME.buttonsColor);
}







/* אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה */

/**
 * # @type {{[index: string]: {init: (card: HTMLElement, json: any) => void}}}
 */
let CARD_TYPES = {};

CARD_TYPES.text = {
    init(card, json) {
        if (!json.content) {
            throw new Error(`Missing content in cardType text`);
        }
        card.querySelector(".content").innerText = json.content;
    }
}

CARD_TYPES.picAndText = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".content").innerText = json.content;
        if (!json.content) {
            card.querySelector(".content").remove();
        }
    }
}

CARD_TYPES.videoAndText = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
        card.querySelector(".content").innerText = json.content;
        if (!json.content) {
            card.querySelector(".content").remove();
        }
    }
}

CARD_TYPES.youtube = {
    init(card, json) {
        if (!json.youtube.includes("embed")) {
            throw new Error("Make sure all youtube links are ment to be embedded and not watched");
        } else {
            card.querySelector(".youtubeIframe").src = json.youtube;
            card.querySelector(".content").innerText = json.content;
            if (!json.content) {
                card.querySelector(".content").remove();
            }
        }
    }
}

CARD_TYPES.listDots = {
    init(card, json) {
        if (typeof(json.numList) !== 'number' || json.numList < 1) {
            console.error(`numList in ${json} is invalid!`);
        }

        for (let num = 1; num <= Number(json.numList); num++) {
            let child = El('li', {} , new Text(json["li" + num]));
            card.querySelector(".list").appendChild(child);
        }
    }
}
CARD_TYPES.listNumbers = {
    init(card, json) {
        if (typeof(json.numList) !== 'number' || json.numList < 1) {
            console.error(`numList in ${json} is invalid!`);
        }

        for (let num = 1; num <= Number(json.numList); num++) {
            let child = El('li', {} , new Text(json["li" + num]));
            card.querySelector(".list").appendChild(child);
        }
    }
}

CARD_TYPES.freeForm = {
    init(card, json) {
        if (json.content) {
            card.querySelector(".content").innerText += json.content
        }
    }
}
