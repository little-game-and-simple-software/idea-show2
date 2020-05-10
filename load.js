console.log("hello world")
//从github读取txt文件
function load()
{
    var request=new XMLHttpRequest()
    document.write(request)
    var url="ideas.txt"
    var op=request.open("GET",url,true)
   var s= request.send()
   alert(op)
}
load()
alert(request)