console.log("hello world")
//从github读取txt文件
function my_load()
{
    var user_ideas2=document.createElement("p")
    var request=new XMLHttpRequest()
    //输出
    var out
    document.write(request)
   // var url="https://raw.githubusercontent.com/little-game-and-simple-software/idea-show/gh-pages/ideas.txt//"
    //"ideas.txt"
    var op=request.open("get","ideas.txt",true)
    request.onload=function()
    {
        console.log(request.status)
        console.log("状态"+request.status)
        // document.write("状态"+request.status)
        console.log(request.responseText)
        out=request.responseText
        if (request.readyState===request.DONE)
        {
            if(request.status===200)
            {
                console.log(request.responseText)
                user_ideas2.innerHTML=request.responseText
            }
            
        }
    }
    request.send() 
    var user_ideas=document.createElement("p")
    console.log(user_ideas)
    user_ideas.innerHTML="新文本!"
    document.body.appendChild(user_ideas2)
    // var body=document.getElementByName("body");
    document.body.appendChild(user_ideas)
    console.log(typeof(request.responseText))
}
my_load()