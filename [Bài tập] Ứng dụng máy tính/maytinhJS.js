

function cong(){
    var a = document.getElementById("so1").value;
    var b = document.getElementById("so2").value;
    var c = parseInt(a) + parseInt(b);
    alert("đáp án: " + c);
}
function tru(){
    var a = document.getElementById("so1").value;
    var b = document.getElementById("so2").value;
    var c = parseInt(a) - parseInt(b);
    alert("đáp án: " + c);
}
function nhan(){
    var a = document.getElementById("so1").value;
    var b = document.getElementById("so2").value;
    var c = parseInt(a) * parseInt(b);
    alert("đáp án: " + c);
}
function chia(){
    var a = document.getElementById("so1").value;
    var b = document.getElementById("so2").value;
    var c = parseInt(a) / parseInt(b);
    alert("đáp án: " + c);
}