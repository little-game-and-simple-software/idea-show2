$(function(){
    console.log("hello world")
    function open()
    {

    }
    function close()
    {

    }
    $("#open").click(function()
    {
        // console.log("hello world")
        $("#center").show()
        $("#left").show()
    })

    $("#close").click(function()
    {
        // console.log("hello world")
        $("#center").hide()
        $("#left").hide()
    })

    $("#exec_open").click(function()
    {
        $("#right").show()
        $("#right").show()
    })

    $("#exec_close").click(function()
    {
        $("#right").hide()
        $("#right").hide()
    })
 })