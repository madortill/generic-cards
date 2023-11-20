import io
import json
import base64
import re
import os

currImg = 0

#  import the data
def importData (unique_id):
    if (not os.path.exists(f"./data/{unique_id}/data.json")):
        raise Exception("./data.json does not exist")
    elif (os.path.getsize("./data.json") < 105000000):
        jsonFile = io.open("./data.json", mode="r", encoding="utf-8")
        jsonData = json.loads(jsonFile.read())
        jsonFile.close()
        return jsonData
    else:
        raise Exception("data.json is too big to process")


def convertBase64 (base64str, picOrvideo):
    print('convertBase64')
    global currImg 
    fileExtension = re.search(r"(?<=data:.{5}/).*(?=;)", base64str).group(0)
    newBase64str = re.sub(r'data:.*/.*;base64', '', base64str[0: 30]) +  base64str[30::]
    contentToWrite = base64.urlsafe_b64decode(newBase64str)
    filepath = "assets\\userAssets\\" + str(picOrvideo) + str(currImg) + '.' + str(fileExtension)
    imgFile =  open(filepath, 'wb')
    imgFile.write(contentToWrite)
    imgFile.close()
    currImg += 1
    return filepath

# find all base64 files
def findPic(json):
    iterator = range(len(json)) if type(json) == list else json
    for index in iterator:
        print('index ' + str(index))
        if (index == 'pic' or index == 'video'):
            filepath = convertBase64(json[index], index)
            json[index] = str(filepath).replace('\\', '/')
        elif (type(json[index]) == list or type(json[index]) == dict):
            findPic(json[index])


def convertBase64 (fileId):
    jsonData = importData(fileId)
    findPic(jsonData["DATA"])
    print(jsonData)
    
    # export processedData
    with io.open("./data/data.json", mode="w", encoding="utf-8") as jsonFile:
        stringified = json.dumps(jsonData, ensure_ascii=False)
        jsonFile.write(stringified)