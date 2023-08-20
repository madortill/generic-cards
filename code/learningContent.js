/*  Edit notes:
    1. Valid card types: youtube, video-and-text, pic-and-text, text, listNumbers, listDots, freeForm
        *freeForm - write html with content key or write the tag name as key and the content as value
    2. Title class: "sub-title" , list class: "list", place on the outer element <ol> or <ul> 

                        HOW TO CREATE NEW COLOR
            search for the listed colors and switch to the desired ones
    1. Primary color: #1aa3a3;
    2. Secondary color: #67dfcb;
    3. Text color: #1f3e3e
    4. Open image + gradient color: #629191;
            */
    
    /* amountOfQuestions - max number of questions from the subject that will appear in the test*/


    const TITLE = "לומדה בלי ציון";
//  Max number of question in exam. Make sure it isn't more than the number of questions we have!
    const AMOUNT_EXAM_QUESTIONS = 0;
    const TIME_FOR_EXAM = "10:00";
    const THEME = {
        name: "ballet-pink",
        hebrawName: "ורוד-בלט",
        primaryColor: "#f97394",
        secondaryColor: "#ffb3c6",
        textColor:"#3a1820",
        gradient: "#ff8fab",
        buttonsColor: "#3a1820"
      }
    const DATA = { 
    "נושא 1:": {
        "icon":  `<svg id='Artboard4'  id="a2fef945-8ab9-446e-a895-61ff21b8686e" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 94 94"><defs><style>.fecd50c4-7ffc-4c35-b8ef-469b48a5c20e{fill:none;}.b1ea7ecf-9711-4885-8c8d-1f6216d52907{clip-path:url(#a94639b9-3fa2-41e4-bd16-dbfa69e96dd0);}.fa31c619-0d54-4b6d-9714-1d00eda99101{fill:${THEME.textColor};}</style><clipPath id="a94639b9-3fa2-41e4-bd16-dbfa69e96dd0"><rect class="fecd50c4-7ffc-4c35-b8ef-469b48a5c20e" x="-1294.34043" y="-1141.5968" width="1080" height="3095"/></clipPath></defs><title>Artboard 4</title><g class="b1ea7ecf-9711-4885-8c8d-1f6216d52907"><g id="b066baa8-578f-4438-a1fd-b71b29d2244e" data-name="Home"><g id="ae9bc7be-dcc4-476e-95d8-ca656b3e9f4b" data-name="Group 506"><g id="b9442d7e-fdd1-4185-a8dd-43be37d85bf3" data-name="Group 511"><g id="ae12efdc-39eb-4579-b170-cec11f5419fa" data-name="Group 510"><g id="ec3a8793-ad61-4131-b005-f7a9267340f1" data-name="Component 15 2"><g id="fd76d6b2-3133-4365-a71d-18639a997c9c" data-name="Group 518-3"><circle id="adce953e-108c-4f79-8b66-5ba0e09efa53" data-name="Ellipse 10-4" class="fa31c619-0d54-4b6d-9714-1d00eda99101" cx="30.00001" cy="72" r="47"/></g></g></g></g></g></g></g><g id="adea663a-0356-43ba-b75c-2c0eb5563ffd" data-name="Group 518-3"><circle id="f20517e6-9024-48f8-a5fd-fa88cb93b73c" data-name="Ellipse 10-4" class="fa31c619-0d54-4b6d-9714-1d00eda99101" cx="47" cy="47" r="47"/></g></svg>`,
        "amountOfQuestions": 2,
        "questionsExam": [
            {
                type: "multiple",
                question: "דוגמה לשאלה אמריקאית מתרגלת שיש לה 4 תשובות?",
                ans1: "תשובה ראשונה ולא נכונה",
                ans2: "תשובה שנייה נכונה!",
                ans3: "תשובה שלישית ולא נכונה",
                ans4: "תשובה רביעית לא נכונה",
                correctAns: "ans2"
            },
            {
                type: "binary",
                sentence: "דוגמה לשאלה מתרגלת נכונה של נכון או לא נכון",
                trueOrFalse: true
            }
        ],
        "questionsPractice": [
            {
                type: "multiple",
                question: "דוגמה לשאלה אמריקאית בוחנת שיש לה 4 תשובות?",
                ans1: "תשובה ראשונה ולא נכונה",
                ans2: "תשובה שנייה נכונה!",
                ans3: "תשובה שלישית ולא נכונה",
                ans4: "תשובה רביעית לא נכונה",
                correctAns: "ans2"
            },
            {
                type: "binary",
                sentence: "דוגמה לשאלה בוחנת נכונה של נכון או לא נכון",
                trueOrFalse: true
            }
        ],
        "learningContent": {
            "תת נושא 1": {
                "כרטיסייה ראשונה מסוג טקסט": [ 
                    {
                        cardType: "youtube",
                        // Make sure it is embed video!
                        youtube: "https://www.youtube.com/embed/n0t9iFlGO20",
                        //  https://www.youtube.com/embed/n0t9iFlGO20
                        content: "דוגמה לתוכן של כרטיסייה המחולקת לפי נושאים ותתי נושאים."
                    },
                ],
                "כרטיסייה שנייה": [
                    {
                        cardType: "picAndText",
                        pic: "../assets/images/pic.png",
                        content: "דוגמה לכותרת לתמונה הראשונה",
                    }
                ],
                "כרטיסייה 3": [
                    {
                        cardType: "freeForm",
                        content: "<ol><li>1</li></ol>",
                    }
                ],
                "כרטיסייה 4": [
                    {
                        cardType: "freeForm",
                        strong: "hello",
                    }
                ],
            },
            "תת נושא 2": {
                "כרטיסייה שלישית מסוג וידאו": [
                    {
                        cardType: "videoAndText",
                        video: "../assets/images/פתיח.mp4",
                        content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
                    }
                ],
                "כרטיסייה רביעית": [
                    {
                        cardType: "text",
                        content: "g"
                    }
                ]
            },
            "תת נושא 3": {
                "תת תת נושא 12": [
                    {
                        cardType: "videoAndText",
                        video: "../assets/images/פתיח.mp4",
                        content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
                    }
                ],
            },
            "תת נושא 5": {
                "תת תת נושא 12": [
                    {
                        cardType: "videoAndText",
                        video: "../assets/images/פתיח.mp4",
                        content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
                    }
                ],
            },
            "תת-נושא חדש": {
                "היי": [
                    {
                        cardType: "videoAndText",
                        video: "../assets/images/פתיח.mp4",
                        content: "סרטון מוסר שלא הבנתי למה הוא היה על המחשב של פלג... פטל.. שלג?"
                    }
                ],
            }
        },
    },
    "2שם של נושא": {
        "icon":  `<svg id='Artboard4'  id="a2fef945-8ab9-446e-a895-61ff21b8686e" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 94 94"><defs><style>.fecd50c4-7ffc-4c35-b8ef-469b48a5c20e{fill:none;}.b1ea7ecf-9711-4885-8c8d-1f6216d52907{clip-path:url(#a94639b9-3fa2-41e4-bd16-dbfa69e96dd0);}.fa31c619-0d54-4b6d-9714-1d00eda99101{fill:${THEME.textColor};}</style><clipPath id="a94639b9-3fa2-41e4-bd16-dbfa69e96dd0"><rect class="fecd50c4-7ffc-4c35-b8ef-469b48a5c20e" x="-1294.34043" y="-1141.5968" width="1080" height="3095"/></clipPath></defs><title>Artboard 4</title><g class="b1ea7ecf-9711-4885-8c8d-1f6216d52907"><g id="b066baa8-578f-4438-a1fd-b71b29d2244e" data-name="Home"><g id="ae9bc7be-dcc4-476e-95d8-ca656b3e9f4b" data-name="Group 506"><g id="b9442d7e-fdd1-4185-a8dd-43be37d85bf3" data-name="Group 511"><g id="ae12efdc-39eb-4579-b170-cec11f5419fa" data-name="Group 510"><g id="ec3a8793-ad61-4131-b005-f7a9267340f1" data-name="Component 15 2"><g id="fd76d6b2-3133-4365-a71d-18639a997c9c" data-name="Group 518-3"><circle id="adce953e-108c-4f79-8b66-5ba0e09efa53" data-name="Ellipse 10-4" class="fa31c619-0d54-4b6d-9714-1d00eda99101" cx="30.00001" cy="72" r="47"/></g></g></g></g></g></g></g><g id="adea663a-0356-43ba-b75c-2c0eb5563ffd" data-name="Group 518-3"><circle id="f20517e6-9024-48f8-a5fd-fa88cb93b73c" data-name="Ellipse 10-4" class="fa31c619-0d54-4b6d-9714-1d00eda99101" cx="47" cy="47" r="47"/></g></svg>`,
      
        "amountOfQuestions": 2,
        "questionsExam": [
            {
                type: "multiple",
                question: "שאלהה שאלתית ששואלת מלא שאלות",
                ans1: "תשובה כלשהית  נכונה",
                ans2: "תשובה לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "אל תלחצו! זה טעות",
                correctAns: "ans1"
            },
            {
                type: "binary",
                sentence: "עוד שאלה לא נכונה על חתולים",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלה על מכוניות",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "תלחצו עליי אני תשובה נכונה",
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: "שאלה שאלתית על מכוניות וזה משפט ארוך",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה תשובה ממש נכונה!",
                ans4: "אל תלחצו עליי אני תשובה לא נכונה",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "עוד שאלה על מכוניות שנוסעות ממש ממש מהר והיא לא נכונה בכלל",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "היי זאת תשובה לא נכונה",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלהה שאלתית ששואלת מלא שאלות",
                ans1: "תשובה כלשהית  נכונה",
                ans2: "תשובה לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "אל תלחצו! זה טעות",
                correctAns: "ans1"
            },
            {
                type: "binary",
                sentence: "עוד שאלה לא נכונה על חתולים",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלה על מכוניות",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "תלחצו עליי אני תשובה נכונה",
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: "שאלה שאלתית על מכוניות וזה משפט ארוך",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה תשובה ממש נכונה!",
                ans4: "אל תלחצו עליי אני תשובה לא נכונה",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "עוד שאלה על מכוניות שנוסעות ממש ממש מהר והיא לא נכונה בכלל",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "היי זאת תשובה לא נכונה",
                trueOrFalse: false
            }
        ],
        "questionsPractice": [
            {
                type: "multiple",
                question: "שאלהה שאלתית ששואלת מלא שאלות",
                ans1: "תשובה כלשהית  נכונה",
                ans2: "תשובה לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "אל תלחצו! זה טעות",
                correctAns: "ans1"
            },
            {
                type: "binary",
                sentence: "עוד שאלה לא נכונה על חתולים",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלה על מכוניות",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "תלחצו עליי אני תשובה נכונה",
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: "שאלה שאלתית על מכוניות וזה משפט ארוך",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה תשובה ממש נכונה!",
                ans4: "אל תלחצו עליי אני תשובה לא נכונה",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "עוד שאלה על מכוניות שנוסעות ממש ממש מהר והיא לא נכונה בכלל",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "היי זאת תשובה לא נכונה",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלהה שאלתית ששואלת מלא שאלות",
                ans1: "תשובה כלשהית  נכונה",
                ans2: "תשובה לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "אל תלחצו! זה טעות",
                correctAns: "ans1"
            },
            {
                type: "binary",
                sentence: "עוד שאלה לא נכונה על חתולים",
                trueOrFalse: false
            },
            {
                type: "multiple",
                question: "שאלה על מכוניות",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה מאוד",
                ans4: "תלחצו עליי אני תשובה נכונה",
                correctAns: "ans4"
            },
            {
                type: "multiple",
                question: "שאלה שאלתית על מכוניות וזה משפט ארוך",
                ans1: "תשובה כלשהית לא נכונה",
                ans2: "תשובה בכלל לא נכונה",
                ans3: "תשובה לא נכונה תשובה ממש נכונה!",
                ans4: "אל תלחצו עליי אני תשובה לא נכונה",
                correctAns: "ans3"
            },
            {
                type: "binary",
                sentence: "עוד שאלה על מכוניות שנוסעות ממש ממש מהר והיא לא נכונה בכלל",
                trueOrFalse: false
            },
            {
                type: "binary",
                sentence: "היי זאת תשובה לא נכונה",
                trueOrFalse: false
            }
        ],
        "learningContent": {
            // סוג הכרטיסייה
            "textAndPic": {

            }
        },
        
    },
    // שם נושא
    "3שם של נושא": {
        "icon":  `<svg id='Artboard4'  id="a2fef945-8ab9-446e-a895-61ff21b8686e" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 94 94"><defs><style>.fecd50c4-7ffc-4c35-b8ef-469b48a5c20e{fill:none;}.b1ea7ecf-9711-4885-8c8d-1f6216d52907{clip-path:url(#a94639b9-3fa2-41e4-bd16-dbfa69e96dd0);}.fa31c619-0d54-4b6d-9714-1d00eda99101{fill:${THEME.textColor};}</style><clipPath id="a94639b9-3fa2-41e4-bd16-dbfa69e96dd0"><rect class="fecd50c4-7ffc-4c35-b8ef-469b48a5c20e" x="-1294.34043" y="-1141.5968" width="1080" height="3095"/></clipPath></defs><title>Artboard 4</title><g class="b1ea7ecf-9711-4885-8c8d-1f6216d52907"><g id="b066baa8-578f-4438-a1fd-b71b29d2244e" data-name="Home"><g id="ae9bc7be-dcc4-476e-95d8-ca656b3e9f4b" data-name="Group 506"><g id="b9442d7e-fdd1-4185-a8dd-43be37d85bf3" data-name="Group 511"><g id="ae12efdc-39eb-4579-b170-cec11f5419fa" data-name="Group 510"><g id="ec3a8793-ad61-4131-b005-f7a9267340f1" data-name="Component 15 2"><g id="fd76d6b2-3133-4365-a71d-18639a997c9c" data-name="Group 518-3"><circle id="adce953e-108c-4f79-8b66-5ba0e09efa53" data-name="Ellipse 10-4" class="fa31c619-0d54-4b6d-9714-1d00eda99101" cx="30.00001" cy="72" r="47"/></g></g></g></g></g></g></g><g id="adea663a-0356-43ba-b75c-2c0eb5563ffd" data-name="Group 518-3"><circle id="f20517e6-9024-48f8-a5fd-fa88cb93b73c" data-name="Ellipse 10-4" class="fa31c619-0d54-4b6d-9714-1d00eda99101" cx="47" cy="47" r="47"/></g></svg>`,
        "amountOfQuestions": 1,
        "questionsExam": [],
        "questionsPractice": [],
        "learningContent": {
            // סוג הכרטיסייה
            "textAndPic": {

            }
        },

    }
};



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
        console.log(card);
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
            card.querySelector(".list").innerHTML += `<li>${json["li"+num]}</li>`;
        }
    }
}
CARD_TYPES.listNumbers = {
    init(card, json) {
        for (let num = 1; num <= Number(json.numList); num++) {
            card.querySelector(".list").innerHTML += `<li>${json["li"+num]}</li>`;
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

