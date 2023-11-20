import json
import io

svgName = io.open("svgName.json", mode="r", encoding='utf-8')
fileConverter = json.loads(svgName.read())
svgName.close()


# print('colorConverter:')
# print(fileConverter)

def replaceColorsInFile (path):
    print('changing path: '+ str(path))
    file = io.open(path, mode="r", encoding='utf-8')
    data = file.read()
    file.close()

    for key in fileConverter:
        data = data.replace(f' {key}', fileConverter[key])
    file = io.open(path, mode="w", encoding='utf-8')
    file.write(data)
    file.close()

replaceColorsInFile('..\code\index.js')
#  TO DO
#upload to git
# run shell command / pythonGit
