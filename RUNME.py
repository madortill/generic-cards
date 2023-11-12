import io
import json
import os, fnmatch
import time

def findData(path):
    result = []
    for root, dirs, files in os.walk(path):
        for name in files:
            if ('data' in name) and ('.json' in name):
                result.append(os.path.join(root, name))
    return result


allDataFiles = findData('.')
print(allDataFiles)

for file in allDataFiles:
    unique_id = str(int(time.time()))[5:] #converting to int to round the float, then converting to str
    print(unique_id)
    if not os.path.exists(os.path.join(".\\data\\", str(unique_id))): 
        print(os.path.join(".\\data\\", str(unique_id)))
        os.makedirs(os.path.join(".\\data\\", str(unique_id)))
    newName = os.path.join(".\\data\\", str(unique_id) ,str(unique_id) + '.json')
    os.rename(file, newName)
    
    # convert to base 64
    os.chdir(f'.\\data\\{unique_id}')
    # do the actual converting 9call a function)
    os.chdir('..\\..')


