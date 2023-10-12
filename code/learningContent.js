
/*  Edit notes:
    1. Valid card types: youtube, video-and-text, pic-and-text, text, listNumbers, listDots, freeForm
        *freeForm - write html with content key or write the tag name as key and the content as value
    2. amountOfQuestions - max number of questions from the subject that will appear in the test
    3. Title class: "sub-title" , list class: "list", place on the outer element <ol> or <ul> 

                        HOW TO CREATE NEW COLOR
            search for the listed colors and switch to the desired ones
    1. Primary color: #1aa3a3;
    2. Secondary color: #67dfcb;
    3. Text color: #1f3e3e
    4. Open image + gradient color: #629191;
*/

let THEME;
let DATA;
let TITLE;

fetch('../data.json')
.then((response) => {
        response.json()
            .then((result) => { 
                THEME = result.THEME;
                TITLE = result.TITLE;
                DATA = result.DATA;
                afterLoaded();
             })
            .catch((err) => { console.log(err) });
    })
    .catch((err) => { console.log(err) });


//  Max number of question in exam. Make sure it isn't more than the number of questions we have!
const AMOUNT_EXAM_QUESTIONS = 0;
const TIME_FOR_EXAM = "10:00";




/********************************************************************************************************/
/********************************************************************************************************/
/********************************************************************************************************/
/*****  אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה  ********/

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
            card.querySelector(".youtube").src = json.youtube;
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

