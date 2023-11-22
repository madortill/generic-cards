
/*  Edit notes:
    1. Valid card types: youtube, video-and-text, pic-and-text, text, listNumbers, listDots, freeForm
        *freeForm - write html with content key or write the tag name as key and the content as value
    2. amountOfQuestions - max number of questions from the subject that will appear in the test
    3. Title class: "sub-title" , list class: "list", place on the outer element <ol> or <ul> 

                        HOW TO CREATE NEW COLOR
            search for the listed colors and switch to the desired ones
    1. primaryColor: #1aa3a3;
    2. secondaryColor: #67dfcb;
    3. textColor: #1f3e3e
    4. gradient: #629191;
*/

let THEME;
let DATA;
let TITLE;
let TIME_FOR_EXAM;
let AMOUNT_EXAM_QUESTIONS;
let OPENING_PICTURE;

//  Get json of data
let url = new URL(window.location.href)
let dataPath = url.searchParams.get('path')

if (!dataPath) {
    location.href = "./404/404.html";
}

fetch(`../data/${dataPath}/${dataPath}.json`)
.then((response) => {
        response.json()
            .then((result) => { 
                THEME = result.THEME;
                TITLE = result.TITLE;
                DATA = result.DATA;
                TIME_FOR_EXAM = result.TIME_FOR_EXAM;
                OPENING_PICTURE = result.OPENING_PICTURE;
                // Max number of question in exam. Make sure it isn't more than the number of questions we have!
                AMOUNT_EXAM_QUESTIONS = result.AMOUNT_EXAM_QUESTIONS
                // determine colors
                changeColors();

                afterLoaded();
             })
            .catch((err) => {
                sessionStorage.setItem('dataFetchingErr', err.toString()); 
                location.href = "./404/404.html";
             });
    })
    .catch((err) => { 
        sessionStorage.setItem('dataFetchingErr', err.toString()); 
        location.href = "./404/404.html";
     });

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
        card.querySelector(".content").innerHTML = json.content;
    }
}

CARD_TYPES.picAndText = {
    init(card, json) {
        card.querySelector(".pic").src = json.pic;
        card.querySelector(".content").innerHTML = json.content;
        if (!json.content) {
            card.querySelector(".content").remove();
        }
    }
}

CARD_TYPES.videoAndText = {
    init(card, json) {
        card.querySelector(".video").src = json.video;
        card.querySelector(".content").innerHTML = json.content;
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
            card.querySelector(".content").innerHTML = json.content;
            if (!json.content) {
                card.querySelector(".content").remove();
            }
        }
    }
}

CARD_TYPES.listDots = {
    init(card, json) {
        for (let num = 1; num <= Number(json.numList); num++) {
            card.querySelector(".list").innerHTML += `<li>${json["li" + num]}</li>`;
        }
    }
}
CARD_TYPES.listNumbers = {
    init(card, json) {
        for (let num = 1; num <= Number(json.numList); num++) {
            card.querySelector(".list").innerHTML += `<li>${json["li" + num]}</li>`;
        }
    }
}

CARD_TYPES.freeForm = {
    init(card, json) {
        if (json.content) {
            card.querySelector(".content").innerHTML += json.content
        } else {
            for (key in json) {
                if (key !== "cardType") {
                    card.querySelector(".content").innerHTML += `<${key}>${json[key]}</${key}>`
                }
            }
        }
    }
}
