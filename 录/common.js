function set_idea_content(url)
        {
            var content = document.getElementById("content")
            console.log(content)
            var request = new XMLHttpRequest()
            request.open("get",url,true)
            request.onload=function()
            {
                console.log(request.status)
                console.log("状态"+request.status)
                // console.log(request.responseText)
                out=request.responseText
                if (request.readyState===request.DONE)
                {
                    if(request.status===200)
                    {
                        console.log(request.responseText)
                        var final_content = request.responseText//.replaceAll("\n", "<br>").replaceAll("\\n", "")
                        content.innerHTML = final_content
                    }
                    
                }
            }
            request.send()
        }