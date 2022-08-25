import os

folder = "./assets"

remove = ".svg.svg"



files = os.listdir(folder)
for f in files:
    if '.svg' in f:
        if f.find(remove) != -1:
            newname = f.split(remove)[0]
            newname = newname + '.svg'
            os.rename(os.path.join(folder,f), os.path.join(folder,newname))