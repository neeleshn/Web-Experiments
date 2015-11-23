
function hover1() {
    document.getElementById("head2").innerHTML = "Hovered";
}

function hover2() {
    document.getElementById("head2").innerHTML = "Please Hover";
}

function alert1() {
    alert("You are Hacked !!! :P");
}

function emailTypeCheck(e) {
    var mail = e;
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    if (filter.test(mail)) {
        return false;
    }
    else {
        return true;
    }
}

function validate() 
{
    var userName = document.getElementById("emailId").value;
    var password = document.getElementById("pwd").value;

    if ((userName == "" || userName == null) && (password == "" || password == null)) 
    {
        alert("Please enter both Email Id and Password");
    }
    else if (password != "admin") 
    {
        document.getElementById("para1").innerHTML = "Wrong Password!!!";
        document.getElementById("para1").style.color = "red";
    }
    else if (emailTypeCheck(userName)) {
    alert("Please enter email properly");
    }
    else 
    {
        document.getElementById("para1").innerHTML = "Login Successful";
        document.getElementById("para1").style.color = "green";
    }
}

function ChangeColor() {
    var value = document.getElementById("colorId").value;
    document.getElementById("heading").style.color = value;
}