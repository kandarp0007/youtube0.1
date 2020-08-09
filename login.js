var attempt = 3; 
function validate(){
var username = document.getElementById("uname").value;
var password = document.getElementById("psw").value;
if ( username == "admin" && password == "admin"){
alert ("Login successfully");
event.preventDefault();
window.location = "music.html";
}
else{
attempt --;
alert("You have left "+attempt+" attempt;");
event.preventDefault();

if( attempt == 0){
//document.getElementById("username").disabled = true;
//document.getElementById("password").disabled = true;
//document.getElementById("submit").disabled = true;

return false;
}
}
}