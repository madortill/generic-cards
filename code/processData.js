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
let AUTHOR;

//  Get json of data
let url = new URL(window.location.href);
let dataPath = url.searchParams.get("path");

if (!dataPath) {
  location.href = "./404/404.html";
}

fetch(`../data/${dataPath}/${dataPath}.json`)
  .then((response) => {
    response
      .json()
      .then((result) => {
        THEME = result.THEME;
        TITLE = result.TITLE?.name;
        DATA = result.DATA;
        TIME_FOR_EXAM = result.TIME_FOR_EXAM;
        OPENING_PICTURE = result.OPENING_PICTURE;
        // Max number of question in exam. Make sure it isn't more than the number of questions we have!
        AMOUNT_EXAM_QUESTIONS = result.AMOUNT_EXAM_QUESTIONS;

        // אפשרות עקיפה דרך ה־URL: ?lang=he / ?lang=ru
        const langOverride = url.searchParams.get("lang");

        // 1) ננסה שדה מפורש ב־JSON (LANG או TITLE.lang)
        // 2) אחרת ניחוש אוטומטי מהתוכן
        const LANG =
          (langOverride && langOverride.toLowerCase()) ||
          (result?.LANG && String(result.LANG).toLowerCase()) ||
          (result?.TITLE?.lang && String(result.TITLE.lang).toLowerCase()) ||
          guessLangFromData(result);

        // קובע <html lang=".."> ו־dir="rtl/ltr"
        applyLocaleByLang(LANG);

        // determine colors
        AUTHOR = result.AUTHOR;
        changeColors();

        afterLoaded();
      })
      .catch((err) => {
        sessionStorage.setItem("dataFetchingErr", err.toString());
        location.href = "./404/404.html";
      });
  })
  .catch((err) => {
    sessionStorage.setItem("dataFetchingErr", err.toString());
    location.href = "./404/404.html";
  });

// שפות ↔︎ כיוון
const LOCALES = {
  he: "rtl",
  ar: "rtl",
  fa: "rtl",
  ur: "rtl",
  en: "ltr",
  ru: "ltr",
  fr: "ltr",
  es: "ltr",
};

function applyLocaleByLang(lang = "en") {
  const dir = LOCALES[lang?.toLowerCase()] || "ltr";
  const root = document.documentElement; // <html>
  root.setAttribute("lang", lang || "en");
  root.setAttribute("dir", dir);
  root.classList.toggle("rtl", dir === "rtl");
  root.classList.toggle("ltr", dir === "ltr");
}

// ניחוש שפה מה-JSON אם אין שדה מפורש
function guessLangFromData(result) {
  if (result?.LANG) return String(result.LANG).toLowerCase();
  if (result?.TITLE?.lang) return String(result.TITLE.lang).toLowerCase();

  // דגימת טקסטים ראשונים לזיהוי כיוון (עברית/ערבית/פרסית ↔︎ RTL, רוסית ↔︎ LTR)
  const samples = [];
  if (result?.TITLE?.name) samples.push(result.TITLE.name);
  try {
    const collect = (node) => {
      if (!node) return;
      if (typeof node === "string") samples.push(node);
      else if (Array.isArray(node)) node.forEach(collect);
      else if (typeof node === "object") Object.values(node).forEach(collect);
    };
    collect(result?.DATA);
  } catch {}
  const s = samples.find(Boolean) || "";
  if (/[\u0590-\u05FF\u0600-\u06FF]/.test(s)) return "he"; // עברית/ערבית/פרסית/אורדו
  if (/[\u0400-\u04FF]/.test(s)) return "ru"; // קירילית
  return "en";
}

const changeColors = () => {
  let rootEl = document.querySelector(":root");
  rootEl.style.setProperty("--primary-color", THEME?.primaryColor);
  rootEl.style.setProperty("--secondary-color", THEME?.secondaryColor);
  rootEl.style.setProperty("--text-color", THEME?.textColor);
  rootEl.style.setProperty("--gradient-color", THEME?.gradient);
  rootEl.style.setProperty("--buttons-color", THEME?.buttonsColor);
};

// --- עזר לכיוון טקסטים דינמיים ---
function setAutoDir(el) {
  if (el && !el.hasAttribute("dir")) el.setAttribute("dir", "auto");
}

/* אובייקטים לפי סוג הכרטיסייה המכניסים את התוכן של כל כרטיסייה אל תוך הכרטיסייה */

/**
 * # @type {{[index: string]: {init: (card: HTMLElement, json: any) => void}}}
 */
let CARD_TYPES = {};

CARD_TYPES.text = {
  init(card, json) {
    if (!json.content) throw new Error(`Missing content in cardType text`);
    const el = card.querySelector(".content");
    if (!el) return;
    setAutoDir(el);
    el.innerText = json.content;
  },
};

CARD_TYPES.picAndText = {
  init(card, json) {
    const pic = card.querySelector(".pic");
    if (pic && json.pic) pic.src = json.pic;

    const el = card.querySelector(".content");
    if (!el) return;
    setAutoDir(el);
    if (json.content) el.innerText = json.content;
    else el.remove();
  },
};

CARD_TYPES.videoAndText = {
  init(card, json) {
    const v = card.querySelector(".video");
    if (v && json.video) v.src = json.video;

    const el = card.querySelector(".content");
    if (!el) return;
    setAutoDir(el);
    if (json.content) el.innerText = json.content;
    else el.remove();
  },
};

CARD_TYPES.youtube = {
  init(card, json) {
    if (!json.youtube || !json.youtube.includes("embed")) {
      throw new Error("Make sure all YouTube links are meant to be embedded and not watched");
    }
    const iframe = card.querySelector(".youtubeIframe");
    if (iframe) iframe.src = json.youtube;

    const el = card.querySelector(".content");
    if (!el) return;
    setAutoDir(el);
    if (json.content) el.innerText = json.content;
    else el.remove();
  },
};

CARD_TYPES.listDots = {
  init(card, json) {
    if (typeof json.numList !== "number" || json.numList < 1) {
      console.error("numList invalid!", json);
    }
    const list = card.querySelector(".list");
    if (!list) return;
    setAutoDir(list);
    for (let num = 1; num <= Number(json.numList || 0); num++) {
      let child = El("li", { dir: "auto" }, new Text(json["li" + num]));
      list.appendChild(child);
    }
  },
};

CARD_TYPES.listNumbers = {
  init(card, json) {
    if (typeof json.numList !== "number" || json.numList < 1) {
      console.error("numList invalid!", json);
    }
    const list = card.querySelector(".list");
    if (!list) return;
    setAutoDir(list);
    for (let num = 1; num <= Number(json.numList || 0); num++) {
      let child = El("li", { dir: "auto" }, new Text(json["li" + num]));
      list.appendChild(child);
    }
  },
};

CARD_TYPES.freeForm = {
  init(card, json) {
    if (!json.content) return;
    const el = card.querySelector(".content");
    if (!el) return;
    setAutoDir(el);
    // זהירות: innerHTML מצריך נתונים נקיים/מסוננים. אם יש ספק—החליפי ל-innerText.
    el.innerHTML += json.content;
  },
};
