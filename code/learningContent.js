// שם הלומדה
const TITLE = "לומדה עם ציון ";

//  Max number of question in exam. Make sure it isn't more than the number of questions we have!
const AMOUNT_EXAM_QUESTIONS = 10;

const TIME_FOR_EXAM = "11:00";


/*              Edit notes:
    1. Valid card types: youtube, video-and-text, pic-and-text, text
    2. Title class: "sub-title" , list class: "list", place on the outer element <ol> or <ul> 

                        HOW TO CREATE NEW COLOR
            search for the listed colors and switch to the desired ones
    1. Primary color: #eda8ec
    2. Secondary color: #c23ac0
    3. Text color: #260129
    4. Open image color: #e586d7;
            */
    
const DATA = { 
    "הכנס שם של נושא": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
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
                        // content: "דוגמה לכותרת לתמונה הראשונה",
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
            }
        },
    },
    "2שם של נושא": {
        "icon":  "../assets/images/learning/Artboard 4.svg",
        // Max number of questions that will be in the exam from this subject
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
        "icon":  "../assets/images/learning/Artboard 4.svg",
        "amountOfQuestions": 0,
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
            }
        ],
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

