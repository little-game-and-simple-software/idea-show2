console.log("hello world")
//从github读取txt文件
function my_load()
{
    var user_ideas = document.getElementById("user_ideas")
    var request = new XMLHttpRequest()
	request.open("get","ideas.txt",true)
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
				var final_content = request.responseText.replaceAll("\n", "<br>").replaceAll("\\n", "")
                user_ideas.innerHTML = final_content
            }
            
        }
    }
    request.send()
    
}

var former_idea_content = ""

function set_idea_content(url)
{
	var idea_content = document.getElementById("idea_content")
	former_idea_content = idea_content.innerHTML
	var request = new XMLHttpRequest()
	request.open("get",url,true)
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
				var final_content = request.responseText.replaceAll("\n", "<br>").replaceAll("\\n", "")
	            idea_content.innerHTML = final_content
	        }
	        
	    }
	}
	request.send()
}

function back_idea_content()
{
	var idea_content = document.getElementById("idea_content")
	console.log(former_idea_content)
	idea_content.innerHTML = former_idea_content
}

my_load()