const fs = require('fs');
// const filesArr = [];

fs.readFile("./assets/svgList.js", (err, data) => {
    let strContent = data.toString();
    let filesArr = strContent.split('/* ---fileName:');
    filesArr.shift();
    filesArr = filesArr.map(item => '/* ---fileName:'.concat(item));
    for (fileContent of filesArr) {
        createNewFile(fileContent);
    }
});

const createNewFile = (fileContent) => {
    // const filePath = fileContent.match(/(?<=\/\* ---fileName: ).*(?=\.svg)/);
    const filePath = /(?<=\/\* ---fileName: )(.*)(?=\.svg)/.exec(fileContent)[0]
    const varName = /(?<=const ).*(?= =)/.exec(fileContent)[0]
    console.log(varName);
}