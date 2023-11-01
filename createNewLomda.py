import io
import json
import re
import os


jsonFile = io.open("./data.json", mode="r", encoding="utf-8")
jsonData = json.loads(jsonFile.read())
jsonFile.close()

# find the hex codes for the new colors
newColors = {}
for key in jsonData["THEME"]:
    if (key != 'name'):
        newColors[key] = jsonData["THEME"][key]

colorOriginFile = io.open("code/processData.js", mode="r", encoding="utf-8")
content = colorOriginFile.read()
regexMatches = re.findall(r'\d\. (?P<colorName>.*): (?P<colorNum>#\w*)', content)

# find the hex code for the old colors (current colors)
currentColors = {}
for tuple in regexMatches:
    currentColors[tuple[0]] = tuple[1]

# create dictionary with oldColor:newColor
colorConverter = {}
for key in currentColors: 
    colorConverter[currentColors[key]] = newColors[key]

print(colorConverter)

def replaceColorsInFile (path):
    print('changing path: '+ str(path))
    file = io.open(path, mode="r", encoding="utf-8")
    data = file.read()
    file.close()
    for key in colorConverter:
        data = data.replace(key, colorConverter[key])
    file = io.open(path, mode="w", encoding="utf-8")
    file.write(data)
    file.close()

# Read files in assets/images
def getAllSvgs (dir):
  for file in os.listdir(dir):
    if file.endswith('.svg'):
        replaceColorsInFile(os.path.join(dir ,file))
    elif os.path.isdir(os.path.join(dir ,file)) and file != 'userAssets':
        getAllSvgs(os.path.join(dir ,file))

# replace colors
getAllSvgs('assets\images')
replaceColorsInFile('code\generalStyle.css')
replaceColorsInFile('code\processData.js')

#  TO DO
# determine currect color by CSS and not js?
# convert base64 to files