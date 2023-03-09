# 子任务，自动生成网页
jumps = ["css","img","js","json"]
avalibleFiles = [".txt",".html"]
import os
for parent,dirnames,filenames in os.walk("./"):
    print(parent)
    
    """if dirnames != []:
        if dirnames !="css":
            if dirnames != "img":
                if dirnames !="js":
                    if dirnames !="json":
                        print(dirnames)
                        """