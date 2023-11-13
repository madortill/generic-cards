import io
import json
import os
import time
import base64
import re

'''                  convert files from base64 
------------------------------------------------------------------------'''
currImg = 0

#  import the data
def importData (unique_id):
    filename = f"./{unique_id}.json"
    if (not os.path.exists(filename)):
        raise Exception(f"there is no json file with the name {unique_id}")
    elif (os.path.getsize(filename) < 105000000):
        jsonFile = io.open(filename, mode="r", encoding="utf-8")
        jsonData = json.loads(jsonFile.read())
        jsonFile.close()
        return jsonData
    else:
        raise Exception(f"{unique_id}.json is too big to process")

def convertBase64 (base64str, picOrvideo):
    print('convertBase64')
    global currImg 
    fileExtension = re.search(r"(?<=data:.{5}/).*(?=;)", base64str).group(0)
    newBase64str = re.sub(r'data:.*/.*;base64', '', base64str[0: 30]) +  base64str[30::]
    contentToWrite = base64.urlsafe_b64decode(newBase64str)
    filepath = "./" + str(picOrvideo) + str(currImg) + '.' + str(fileExtension)
    filepathFromCode = os.path.join("../data", str(unique_id), str(picOrvideo) + str(currImg) + '.' + str(fileExtension))
    print(filepathFromCode)
    imgFile =  open(filepath, 'wb')
    imgFile.write(contentToWrite)
    imgFile.close()
    currImg += 1
    return filepathFromCode

# find all base64 files
def findPic(json):
    iterator = range(len(json)) if type(json) == list else json
    for index in iterator:
        if (index == 'pic' or index == 'video'):
            filepath = convertBase64(json[index], index)
            json[index] = str(filepath).replace('\\', '/')
        elif (type(json[index]) == list or type(json[index]) == dict):
            findPic(json[index])

'''                  change names to unique_ids  
------------------------------------------------------------------------'''
idList = []

def findData(path):
    result = []
    for root, dirs, files in os.walk(path):
        for name in files:
            if ('data' in name) and ('.json' in name):
                result.append(os.path.join(root, name))
    # raise exception if no files were found
    if len(result) > 0:
        return result
    else:
        raise Exception('no file named data.json exists in ' + str(os.getcwd()))

def startConversion (unique_id): 
    jsonData = importData(unique_id)
    findPic(jsonData["DATA"])
    
    # export data after base64 conversion
    with io.open(f"./data/{unique_id}/{unique_id}.json", mode="w", encoding="utf-8") as jsonFile:
        stringified = json.dumps(jsonData, ensure_ascii=False)
        jsonFile.write(stringified)



'''                  start running code 
------------------------------------------------------------------------'''
allDataFiles = findData('.')
    

for file in allDataFiles:
    unique_id = str(int(time.time()))[5:] #converting to int to round the float, then converting to str
    print(unique_id)
    #  check if dir exists and if not, creates new one
    if not os.path.exists(os.path.join(".\\data\\", str(unique_id))): 
        print(os.path.join(".\\data\\", str(unique_id)))
        os.makedirs(os.path.join(".\\data\\", str(unique_id)))
    
    # rename and move the file to id directory inside ./data/
    newName = os.path.join(".\\data\\", str(unique_id) , str(unique_id) + '.json')
    os.rename(file, newName)
    
    # convert to base 64
    os.chdir(f'.\\data\\{unique_id}')
    startConversion(unique_id)
    os.chdir('../..')
    print(f"cwd: {os.getcwd()}")

    idList.append(unique_id)
    # add id to list of all jsons
    with open("data/jsonIds.json", "r") as jsonFile:
        data = json.load(jsonFile)

    data.append(unique_id)

    with open("data/jsonIds.json", "w") as jsonFile:
        json.dump(data, jsonFile)


