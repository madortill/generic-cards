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
    print(tuple)
    currentColors[tuple[0]] = tuple[1]

print(currentColors)

# create dictionary with oldColor:newColor
colorConverter = {}
for key in currentColors: 
    colorConverter[currentColors[key]] = newColors[key]

print(colorConverter)

# Read files in assets/images
