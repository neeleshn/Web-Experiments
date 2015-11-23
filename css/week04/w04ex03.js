$(init);

function init() 
{
    $("#dialog").dialog({
        autoOpen: false
    });
    $("#click1").click(function () {
        $("#dialog").dialog({
            modal: true,
            resizable: false,
        });
    });
}