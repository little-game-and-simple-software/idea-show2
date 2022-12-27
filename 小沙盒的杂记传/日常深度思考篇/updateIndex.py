#todo: 根据有几个文件，自动生成并创建索引。
import os
file_names = os.listdir()
files = []
# 获得文件名
for file in file_names:
    if ".html" in file:
        if file == "index.html":
            continue
        files.append(file)
    elif ".py" in file:
        continue
print(files)
# 写入索引
indexFile = open("index.html","w+",encoding="utf-8")
for f in files:
    # print(file)
    model = """<button class="idea_button" onclick="set_idea_content('小沙盒的杂记传/日常深度思考篇/{currentFile}')">{currentFileName}</button>"""
    cName = f.replace(".html","")
    line = model.format(currentFile=f,currentFileName=cName)
    indexFile.write(line + "\n")
indexFile.close()
