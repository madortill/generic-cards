const fs = require('fs');
const dynamicColorFilesPaths = []
const unusedPathsNotCSS = [];
const CSSUnusedPaths = [];

const getAllSvgs = (dir) => {
    for (const file of fs.readdirSync(dir)) {
        if (file.endsWith('.svg')) {
          checkForDynamic(`${dir}/${file}`);
        } else if (fs.lstatSync(`${dir}/${file}`).isDirectory()) {
          getAllSvgs(`${dir}/${file}`);
        }
    }
  }

  const checkForDynamic = (filePath) => {
    fileContent = fs.readFileSync(filePath, 'utf-8')
    fileContent = fileContent.toString();
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
      }
    }
    
    if (containDynamicColors) {
      return dynamicColorFilesPaths.push(filePath);
    }
  }

const findUnusedPaths = (path) => {
  for (const file of fs.readdirSync(path)) {
    if (fs.lstatSync(`${path}/${file}`).isDirectory()) {
      findUnusedPaths(`${path}/${file}`);
    } else if (file !== "svgList.js") {
      if (file.endsWith('.css')) {
        fileContent = fs.readFileSync(`${path}/${file}`, 'utf-8');
        fileContent = fileContent.toString();
        for (pic of dynamicColorFilesPaths) {
          if (fileContent.includes(pic)) {
            // search for path in file
            CSSUnusedPaths.push(pic)
          }
        }
      } else {
        fileContent = fs.readFileSync(`${path}/${file}`, 'utf-8');
        fileContent = fileContent.toString();
        for (pic of dynamicColorFilesPaths) {
          if (fileContent.includes(pic)) {
            // search for path in file
            unusedPathsNotCSS.push(pic)
          }
        }
      }
    }
  }
}

getAllSvgs("assets");
findUnusedPaths("code");
console.log('All svgs', dynamicColorFilesPaths, dynamicColorFilesPaths.length)
console.log('need to change CSS', CSSUnusedPaths, CSSUnusedPaths.length);
console.log('need to change NOT CSS', unusedPathsNotCSS, unusedPathsNotCSS.length);