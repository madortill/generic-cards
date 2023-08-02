const fs = require('fs');

const getAllSvgs = (dir) => {
  for (const file of fs.readdirSync(dir)) {
      if (file.endsWith('.svg')) {
          svgContent = returnFileContent(`${dir}/${file}`);
          if (svgContent !== undefined) {
            fs.writeFile(`svgList.js`, 
              `const ${makeFileNameVariable(file)} = \`${svgContent}\`; \n`,
              { flag: 'a+' },
              () => {});
          }
      } else if (fs.lstatSync(`${dir}/${file}`).isDirectory()) {
        getAllSvgs(`${dir}/${file}`);
      }
  }
}

const makeFileNameVariable = (fileName) => {
  let newFileName = fileName.substring(0, fileName.length - 4);
  newFileName = newFileName.replace(/[- ]./g, x=>(`${x[1].toUpperCase()}${x.slice(2)}`));
  console.log(`old name: ${fileName}, new name: ${newFileName}`)
  return newFileName;
}

const returnFileContent = (filePath) => {
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
      fileContent.replaceAll(hex, colors[hex]);
    }
  }
  return (containDynamicColors ? fileContent: undefined);
}

// Empty the file svgList from the last tries
fs.writeFileSync(`svgList.js`, '')
getAllSvgs("assets");