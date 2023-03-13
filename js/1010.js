function hello_world()
{
    console.log("这是一个神奇的，暗藏玄机的网站。就看你能不能找到那个小开关，哈哈哈哈哈哈。")
    console.log("提示，道德经、开关、老子、迷失自我、堕落、光明、希望、友好、一切事物都在矛盾纠结运动中发展。")
}

function request_fozu()
{
    var request = new XMLHttpRequest()
    request.open("get",'fozu.txt',true)
    request.send()
    request.onload = function()
    {
        console.log(request.responseText)
    }
}

function requset_laozi()
{
    console.log("道法自然")
}

function request_zhufu()
{
    request_fozu()
    requset_laozi()
}

hello_world()
request_zhufu()