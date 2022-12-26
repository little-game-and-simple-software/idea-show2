print("欢迎使用")
print("1. 个人感悟篇+")
print("2. 焦虑篇+")
print("3. 精神幻觉篇+")
print("4. 精神觉醒篇+")
print("5. 人工智能篇+")
print("6. 思想保护篇+")
print("7. 拯救篇+")
function = input("请选择你需要的功能\n")
seq = int(function)

def writeIn(type: str):
    title = input("请输入文章标题\n")
    contentFile = open(type + "/" + title + ".html","w",encoding="utf-8")
    contentFile.write("")
    contentFile.close()
    # indexFile = open("type+/index.html","w+",encoding="utf-8")
    # 使用字符串内插处理
    # file.write("<button class=" + "'idea_button'" + "onclick=" + "'set_idea_content('小沙盒的杂记传/人工智能篇/如何创建人工智能.html')">如何创建人工智能</button>")
    # indexFile.close()

    pass

if seq == 1:
    writeIn("个人感悟篇")

elif seq == 2:
    writeIn("焦虑篇")

elif seq == 3:
    writeIn("精神幻觉篇")

elif seq == 4:
    writeIn("精神觉醒篇")

elif seq == 5:
    writeIn("人工智能篇")

elif seq == 6:
    writeIn("思想保护篇")

elif seq == 7:
    writeIn("拯救篇")