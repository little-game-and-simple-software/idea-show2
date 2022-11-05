#用于自动创建新传记目录
import os
import re
from tokenize import group
dir_name = input("请输入你需要创建的目录名称\n")
os.mkdir("../"+dir_name)
model_str="""<h1>{Dir}</h1>
<div>
    <button class="idea_button" onclick="set_idea_content('1.html')">{Link}</button>
</div>"""
result = model_str.format(Dir=dir_name,Link="索引名称")
# print(result)
file = open("../" + dir_name + "/index.html","w",encoding="utf-8")
file.write(result)
file.close()