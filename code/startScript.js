let checkLoadInterval;

// כותרת ראשית ללומדה
document.querySelector(".page.opening .title").innerHTML = TITLE;
document.querySelector(".page.learning .title").innerHTML = TITLE;

let fullScreen = El("div", { cls: "full-screen" });
document.querySelector(".page.opening").before(fullScreen);
fullScreen.addEventListener("click", homePage);

// מעבר בין עמוד הבית לעמוד הלמידה
let scrollingIcon = El("img", { attributes: { class: "scrolling_icon", alt:"עכבר לוחץ", src: "../assets/images/opening/scrolling_icon.svg" } });
document.querySelector(".page.opening .container-scrolling_icon").append(scrollingIcon);
// הפעלה של האנימציה בלחיצה
document.querySelector(".page.opening  .expand").style.transition = "all 1s ease";


// מעבר לדף הבית
function homePage(event) {
    document.querySelector(".page.home").classList.add("active");
    document.querySelector(".full-screen").remove();
    document.querySelector(".main").removeEventListener("scroll", homePage, false);

    document.querySelector(".main").style.overflow = "hidden";
    document.querySelector(".page.home .books").style.display = "block";
    document.querySelector(".page.home .textArea").style.display = "block";
    document.querySelector(".page.opening").classList.add("scrolled");

    document.querySelector(".page.home .about").style.display = "block";
    document.querySelector(".page.home .about").addEventListener("click", aboutPage);

    let fullScreen = El("div", { cls: "full-screen" });
    document.querySelector(".page.opening").before(fullScreen);

    // מעבר לדף הבית
    if (!isIndexLoaded) {
        // לא מראה אפשרות להמשיך הלאה עד ששאר הקוד לא נטען
        document.querySelector('.expand.container-scrolling_icon').style.transition = 'opacity 1s';
        document.querySelector('.expand.container-scrolling_icon').style.opacity = '0';
        document.querySelector('#next-text').style.transition = 'opacity 1s';
        document.querySelector('#next-text').style.opacity = '0';
    }
    setTimeout(function () {
        checkLoadInterval = setInterval(addListenersForContinue, 100);
    }, 1000);
}

function aboutPage(event) {
    document.querySelector(".full-screen").style.visibility = "hidden";
    document.querySelector(".page.opening").classList.remove("active");
    document.querySelector(".page.home").classList.remove("active");
    document.querySelector(".page.about").classList.add("active");
    // מעבר לדף הבית
    document.querySelector(".page.about .back-btn").addEventListener("click", () => {
        document.querySelector(".full-screen").style.visibility = "visible";
        document.querySelector(".page.opening").classList.add("active");
        document.querySelector(".page.home").classList.add("active");
        document.querySelector(".page.about").classList.remove("active");
    });
}

const addListenersForContinue = () => {
    // מעבר לדף הבית
    // isIndexLoaded is a variable that index.js changes to true when it loads
    if (isIndexLoaded) {
        clearInterval(checkLoadInterval);
        document.querySelector('.expand.container-scrolling_icon').style.opacity = '1';
        document.querySelector('#next-text').style.opacity = '1';
        document.querySelector(".full-screen").addEventListener("click", () => {
            document.querySelector(".full-screen").remove();
            document.querySelector(".page.opening").classList.remove("active");
            document.querySelector(".page.home").classList.remove("active");
            document.querySelector(".page.learning.subjects").classList.add("active");
            learningSubjectsPage();
        });
    }
}

// REQUIREMENTS: title, theme