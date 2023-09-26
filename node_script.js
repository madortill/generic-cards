const fs = require('fs');
const svgsNames = {};
let fileCount = 0;


const getAllSvgs = (dir) => {
  for (const file of fs.readdirSync(dir)) {
      if (file.endsWith('.svg')) {
          svgContent = returnFileContent(`${dir}/${file}`, file);
          if (svgContent !== undefined) {
            fileCount++;
            fs.writeFile(`assets/svgList.js`, 
              `/* ---fileName: ${dir}/${file}--- */ \n const ${makeFileNameVariable(file)}Svg = \`${svgContent}\`; \n`,
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

const returnFileContent = (filePath, file) => {
  let fileContent = fs.readFileSync(filePath, 'utf-8')
  fileContent = fileContent.toString();
  // add id
  fileContent = fileContent.replace('svg', `svg id='${makeFileNameVariable(file)}' `)
  let containDynamicColors = false;
  let colors = {
    "#1aa3a3": "primaryColor",
    "#67dfcb": "secondaryColor",
    "#1f3e3e": "textColor",
    "#629191": "gradient"
  }
  for (hex in colors) {
    if (fileContent.includes(hex)) {
      containDynamicColors = true;
      fileContent = fileContent.replaceAll(hex, `\${THEME.${colors[hex]}}`);
    }
  }

  if (containDynamicColors) {
    fileContent = changeClassNames(fileContent, file);
    return fileContent;
  }
  return undefined;
}

const changeClassNames = (data, file) => {
  if (data.match(/(?<=[.(=")])st(?=[0-9])/g)) {
    return (data.replace(/(?<=[.(=")])st(?=[0-9])/g, makeFileNameVariable(file)));
  } else if (data.match(/(?<=[.(=")])cls-(?=[0-9])/g)) {
    return (data.replace(/(?<=[.(=")])cls-(?=[0-9])/g, makeFileNameVariable(file)));
  } else {
    return fileContent
  }
}

// Empty the file svgList from the last tries
fs.writeFileSync(`assets/svgList.js`, '')
getAllSvgs("assets");

// Add to the js file the object of the old and new names
fs.writeFileSync(`assets/svgList.js`, `/* 
  convertion from old names to new ones (kebeb-case to camel-case) \n
-------------- \n
  let namesObj = ${JSON.stringify(svgsNames)})} */ \n`, { flag: 'a+' },);

console.log(svgsNames);
console.log('files added: ' + fileCount);

console.log("");
console.warn("You need to add manually the files: \n assets/images/learning/choosePractice_popup/nonSelectSMALL.svg \n assets/images/general/right_btn.svg \n /assets/images/general/chooseQuestion_btn.svg")