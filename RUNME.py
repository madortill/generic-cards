import io
import json
import os
import time
import base64
import re
import ctypes
import subprocess

'''                  alert function 
------------------------------------------------------------------------'''
MB_ICONSTOP = MB_ICONERROR = MB_ICONHAND = 0x10
MB_ICONINFORMATION = MB_ICONASTERISK = 0x40
MB_DEFAULT_DESKTOP_ONLY = 0x20000
MB_RIGHT = 0x80000
MB_RTLREADING = 0x100000
MB_TOPMOST = 0x40000


def msgBox(title, text, style='info'):
    styleCodes = MB_RTLREADING | MB_RIGHT | MB_ICONASTERISK
    if style == 'error':
        styleCodes = MB_ICONERROR | MB_RTLREADING | MB_RIGHT | MB_TOPMOST
    
    return ctypes.windll.user32.MessageBoxW(None, text, title, styleCodes)

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
    global currImg 
    if re.search(r"(?<=data:.{5}/).*(?=;)", base64str) != None:
        fileExtension = re.search(r"(?<=data:.{5}/).*(?=;)", base64str).group(0)
        newBase64str = re.sub(r'data:.*/.*;base64', '', base64str[0: 30]) +  base64str[30::]
        contentToWrite = base64.urlsafe_b64decode(newBase64str)
        filepath = ".\\" + str(picOrvideo) + str(currImg) + '.' + str(fileExtension)
        filepathFromCode = os.path.join("..\\data", str(unique_id), str(picOrvideo) + str(currImg) + '.' + str(fileExtension))
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
    # files = [f for f in os.listdir(path) if os.path.isfile(os.path.join(path, f))]
    for root, dirs, files in os.walk(path):
        for name in files:
            if ('data' in name) and ('.json' in name):
                result.append(os.path.join(root, name))
    # raise exception if no files were found
    if len(result) > 0:
        return result
    else:
        msgBox('אופס!', 'לא מצאנו אף קובץ שקוראים לו data.json. \n יכול להיות ששמתם אותו במקום אחר?', 'error')
        raise Exception('no file named data.json exists in ' + str(os.getcwd()))


def startConversion (unique_id): 
    jsonData = importData(unique_id)
    if "DATA" in jsonData:
        findPic(jsonData["DATA"])
    else:
        raise Exception('make sure there is a data key in data.json!')
    
    # export data after base64 conversion
    with io.open(f"./{unique_id}.json", mode="w", encoding="utf-8") as jsonFile:
        stringified = json.dumps(jsonData, ensure_ascii=False)
        jsonFile.write(stringified)


'''                  start running code 
------------------------------------------------------------------------'''
allDataFiles = findData('.')
    

unique_id = str(int(time.time()))[5:] #converting to int to round the float, then converting to str
for file in allDataFiles:
    unique_id = str(int(unique_id) + 1)
    print('unique_id ' + unique_id)
    #  check if dir exists and if not, creates new one
    if not os.path.exists(os.path.join(".\\data\\", str(unique_id))): 
        os.makedirs(os.path.join(".\\data\\", str(unique_id)))
    
    # rename and move the file to id directory inside ./data/
    newName = os.path.join(".\\data\\", str(unique_id) , str(unique_id) + '.json')
    os.rename(file, newName)
    
    # convert to base 64
    os.chdir(f'.\\data\\{unique_id}')
    startConversion(unique_id)
    os.chdir('../..')

    print('adding id to id_list')
    idList.append(unique_id)
    # add id to list of all jsons
    with open("./data/id-list.json", "r") as jsonFile:
        data = json.load(jsonFile)

    data.append(unique_id)

    with open("./data/id-list.json", "w") as jsonFile:
        json.dump(data, jsonFile)

# run powershell code (upload to git + copy to clip board) and show results
p = subprocess.run(["powershell.exe", "./uploadToGit.ps1", unique_id], capture_output=True)
error = p.stderr.decode('utf-8')
if p.returncode != 0:
    message = 'הייתה בעיה בהעלאה לגיט. \n יש לעשות את ההעלאה באופן ידני. \n הסתכלו בטרמינל.'
    if re.search(r'^fatal: (.+)', error) != None:
        message = 'הייתה בעיה בהעלאה לגיטהאב. \n יש לעשות את ההעלאה באופן ידני. הבעיה היא: \n' + re.search(r'^fatal: (.+)', error)[1]
    print(error)
    msgBox('אוי! משהו השתבש.', message , 'error')
    input = input('press enter to continue')
    msgBox('הקישור ללומדה', f"הקישור הועתק ללוח: \n https://madortill.github.io/generic-cards/code/?path={unique_id}" , 'info')
else:
    print('powershell output: \n' + p.stdout.decode('utf-8'))  
    msgBox('לומדה חדשה נוצרה!', f'לחצו "אישור" כדי להעתיק את הקישור הבא ללוח: https://madortill.github.io/eneric-cards/code/?path={unique_id}', 'info')
