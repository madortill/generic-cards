var lessonsNames = [];
var chosenSubject;

function lessonsPage(subject) {
    chosenSubject = subject;

    // הוספת כפתור חזרה למסך הבית
    let backBtn =
    El("img", {
        attributes: { class: "back-btn", src: "../assets/images/general/back_btn.svg" },
        listeners: {
            click: function () {
                document.querySelector(".page.learning.subjects").classList.add("active");
                document.querySelector(".page.learning.lessons").classList.remove("active");
                resetLessonsPage();
                learningSubjectsPage();
            }
        }
    });
    document.querySelector(".page.learning.lessons").append(backBtn);

    // הוספת כפתור חזרה למסך הבית
    let practiceBtn =
    El("img", {
        attributes: { class: "practice-btn", src: "../assets/images/general/practice_btn.svg" },
        listeners: {
            click: function () {
                practicePopup(chosenSubject);
            }
        }
    });
    document.querySelector(".page.learning.lessons").append(practiceBtn);

    document.querySelector(".page.learning.lessons .title").innerHTML = chosenSubject;

    lessons();

}

// הפונקציה תיצור מערך המכיל את שמות השיעורים של הנושא הנבחר
function lessons() {
    lessonsNames = Object.keys(DATA[chosenSubject].lessons);

    console.log(lessonsNames);
    // יוצר את הכרטיסיות של השיעורים לפי הנושא הנבחר
    for (let lesson of lessonsNames) {
        // console.log(lesson);
        createLessonsCards(lesson);
    }
}

// יצירת קלפים ללמידה
function createLessonsCards(lesson) {
    let lessonCard =
        El("div", { cls: "lessonCard" },
            // El("img", { attributes: { src: DATA[lesson].icon, class: "icon" } }),   // אם רוצים להוסיף אייקון גם לשיעורים
            El("div", { cls: "subject" }, lesson)
        );
    document.querySelector(".page.learning.lessons .cards-container").append(lessonCard);
    lessonCard.addEventListener("click", (event) => {
        let chosenLesson = event.currentTarget.innerText.trim();
        console.log(event.currentTarget.innerText);
        document.querySelector(".page.learning.lessons").classList.remove("active");
        document.querySelector(".page.learning.content").classList.add("active");
        subjectLearningPage(chosenLesson);
        
        //זה מה שהיה במקור אמור להיות:
        // document.querySelector(".page.learning.content").classList.add("active");
        // subjectLearningPage(currentSubject);
    });
}

// פונקציה המאפסת את מסך השיעורים ברגע שיוצאים ממנו
function resetLessonsPage() {
    document.querySelector(".page.learning.lessons .back-btn").remove();
    document.querySelector(".page.learning.lessons .practice-btn").remove();
    document.querySelector(".page.learning.lessons  .cards-container").innerHTML = "";
}

function practicePopup(subject) {
    document.querySelector(".page.learning.lessons .title").style.filter = `blur(${blurAmount})`;
    document.querySelector(".page.learning.lessons .practice-btn").style.filter = `blur(${blurAmount})`;
    document.querySelector(".page.learning.lessons .back-btn").style.filter = `blur(${blurAmount})`;
    document.querySelector(".page.learning.lessons .cards-container").style.filter = `blur(${blurAmount})`;
    document.querySelector(".page.learning.lessons .sub-title").style.filter = `blur(${blurAmount})`;
    let popup =
        El("div", { cls: "dark" },
            // כל הקלף
            El("div", { cls: "before-practice-one-sub" },
                El("img", {
                    attributes: {
                        src: "../assets/images/general/close_btn.svg", class: "close-btn"
                    }, listeners: {
                        // // כפתור סגירה של הפופאפ
                        click: function () {
                            document.querySelector(".page.learning.lessons .title").style.filter = "unset";
                            document.querySelector(".page.learning.lessons .practice-btn").style.filter = "unset";
                            document.querySelector(".page.learning.lessons .back-btn").style.filter = "unset";
                            document.querySelector(".page.learning.lessons .cards-container").style.filter = "unset";
                            document.querySelector(".page.learning.lessons .sub-title").style.filter = "unset";
                            document.querySelector(".page.learning.lessons .dark").remove();
                        }
                    }
                }),
                // כותרת
                El("div", { cls: "title-popup" }, "לפני שמתחילים"),
                El("div", { cls: "instructions-practice" },
                    // בלוק 1
                    El("div", { cls: "instruction-practice" },
                        El("div", { cls: "text" },
                            El("b", {}, "דקה"),
                            " לכל שאלה",
                        ),
                        El("img", { attributes: { src: "../assets/images/exam/beforeExam_popup/timer_icon.svg", class: "icon2" } }),
                    ),
                    El("div", { cls: "grey-line" }),
                    // בלוק 2
                    El("div", { cls: "instruction-practice" },
                        El("div", { cls: "text" },
                            "זה רק",
                            El("b", {}, " תרגול")
                        ),
                        El("img", { attributes: { src: "../assets/images/practice/beforePractice_popup/blow_icon.svg", class: "icon2" } }),
                    ),
                    El("div", { cls: "grey-line" }),
                    // בלוק 3
                    El("div", { cls: "instruction-practice" },
                        El("div", { cls: "text" },
                        El("b", {}, " הקליקו") ,
                            " למעבר בין השאלות",
                        ),
                        El("img", { attributes: { src: "../assets/images/practice/beforePractice_popup/slide_icon.svg", class: "icon4" } }),
                    ),
                    El("div", { cls: "grey-line" }),
                ),
                El("img", {
                    attributes: {
                        src: "../assets/images/general/ok_btn.svg", class: "start-btn"
                    }, listeners: {
                        click: function () {
                            // כפתור מעבר למבחן מהפופאפ
                            document.querySelector(".page.learning.lessons .title").style.filter = "unset";
                            document.querySelector(".page.learning.lessons .practice-btn").style.filter = "unset";
                            document.querySelector(".page.learning.lessons .back-btn").style.filter = "unset";
                            document.querySelector(".page.learning.lessons .cards-container").style.filter = "unset";
                            document.querySelector(".page.learning.lessons .sub-title").style.filter = "unset";
                            document.querySelector(".page.learning.lessons .dark").remove();
                            document.querySelector(".page.learning.lessons").classList.remove("active");
                            document.querySelector(".page.practice").classList.add("active");
                            theChosenSub(subject);
                            resetLessonsPage();
                            practicePage();
                        }
                    }
                })
            )
        );

    document.querySelector(".page.learning.lessons").append(popup);
}