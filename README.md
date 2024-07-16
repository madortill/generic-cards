Reads info form <data.json> in the root folder (generic-cards)
To activate, copy the file the user sent you into this folder. The name of the file must include the word "data" and its extension must be .json.
nInstall python on your computer if it's not already installed (search "python" on google, click the first site, click downloads and click the yellow button. During the installation, MAKE SURE to activate the box "Add python.exe to path", which is in the first page)
Then, click twice


IMPORTANT! DO NOT delete the .ps1 file, the python (.py) file uses it.
*Regular run*: click the python file twice
*Run through the terminal*: write "python RUNME.py"

הכנת לומדה עם המחולל
1. תעשו clone לתיקייה generic-cards
2. תעתיקו את הקובץ ששלומי ישלח לתוך התיקייה. חשוב שתופיע המילה data בשם שלו.
3. תורידו extension של python ל vscode
4. תורידו python ותוודאו שהוא נמצא ב path (צריך לסמן תיבה קטנה)
3. תכתבו בטרמינל python RUNME.py
4. אם קיבלתם הודעת הצלחה, תעשו ctrl+v בתוך מייל או ווטסאפ ותשלחו לשלומי


#אפשרויות שלא מופיעות במחולל:
לכל הדוגמאות, ראו את הקובץ `samples.json`
- להוסיף שאלות תרגול ומבחן.
- להוסיף אייקון שונה לכל נושא
- לשנות את תמונת הפתיחה (לשנות אותה באילוסטרטור ואז להוסיף קישור לחדשה בתוך OPENING_PICTURE)
- לשנות זמן למבחן
- AMOUNT_EXAM_QUESTIONS לא באמת עושה משהו כרגע 


When did I use innerHTML in index.js?\
- to empty elements
- to insret input taht came from the server (it is sanitized in the server) AND went throught DOMpurify

I only use innerTExt when I expect something specific like numbers (points, card serial number, etc. )