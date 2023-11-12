const fs = require('fs');
const svgsNames = {};
let fileCount = 0;


const getAllSvgs = (dir) => {
  for (const file of fs.readdirSync(dir)) {
      if (file.endsWith('.svg')) {
          svgContent = isDynamic(`${dir}/${file}`, file);
          if (isDynamic(`${dir}/${file}`, file)) {
            fileCount++;
            // fs.writeFile(`assets/svgName.json`, 
            //   `/* ---fileName: ${dir}/${file}--- */ \n const ${makeFileNameVariable(file)}Svg = \`${svgContent}\`; \n`,
            //   { flag: 'a+' },
            //   () => {});
            fs.writeFile(`svgName.json`, 
              `"${makeFileNameVariable(file)}Svg": "\\"<svg class='background-image' data-src='../${dir}/${file}'></svg>\\"", \n`,
              { flag: 'a+' },
              () => {});
          }
      } else if (fs.lstatSync(`${dir}/${file}`).isDirectory()) {
        getAllSvgs(`${dir}/${file}`);
      }
  }
}

const makeFileNameVariable = (fileName) => {
  let shortFileName = fileName.substring(0, fileName.length - 4);
  let newFileName = shortFileName.replace(/[- ]./g, x=>(`${x[1].toUpperCase()}${x.slice(2)}`));
  if (shortFileName !== newFileName) {
    svgsNames[fileName] = newFileName;
  }
  return newFileName;
}

const isDynamic = (filePath, file) => {
  let fileContent = fs.readFileSync(filePath, 'utf-8')
  fileContent = fileContent.toString();
  // add id
  let containDynamicColors = false;
  let colors = ['--primary-color', '--secondary-color', '--text-color', '--gradient-color']
  for (hex of colors) {
    if (fileContent.includes(hex)) {
      containDynamicColors = true;
    }
  }

  return containDynamicColors;
}


// clear svgNames
fs.writeFileSync(`svgName.json`, '{')
getAllSvgs("../assets");
fs.appendFile(`svgName.json`, 
`}`, function (err) {
  if (err) throw err;
  console.log('Saved!');
})


console.log(svgsNames);
console.log('files added: ' + fileCount);

"assets/images/learning/choosePractice_popup/nonSelectSMALL.svg"
"assets/images/general/right_btn.svg"
"/assets/images/general/chooseQuestion_btn.svg"

/* duplicated:
  "nextQuestion_btnSvg": "<svg class='background-image' data-src='../assets/images/practice/nextQuestion_btn.svg'></svg>",
  
  "timer_iconSvg": "<svg class='background-image' data-src='../assets/images/practice/beforePractice_popup/timer_icon.svg'></svg>", 
  "slide_iconSvg": "<svg class='background-image' data-src='../assets/images/practice/beforePractice_popup/slide_icon.svg'></svg>", 
  "timer_iconSvg": "<svg class='background-image' data-src='../assets/images/general/finish_popup/timer_icon.svg'></svg>", 
*/