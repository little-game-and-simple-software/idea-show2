$(function()
{
    console.log("hello world")
    function open_book()
    {
        $("#center").show()
        $("#left").show()
    }
    function close_book()
    {
        $("#center").hide()
        $("#left").hide()
    }
    $("#open").click(function()
    {
        open_book()
    })

    $("#close").click(function()
    {
        // console.log("hello world")
        close_book()
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