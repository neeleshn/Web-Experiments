$(init);
function init() {
    var flag=0;
    $("#flip").click(function () {
        $("#flip").text("Click here to slide me up");
        $("#panel").slideToggle("slow");
        if (flag == 0) 
        {
            flag = 1;
            $("#flip").text("Click here to slide me Up");
        }
        else 
        {
            flag = 0;
            $("#flip").text("Click here to slide me Down");
        }
    });
}