 var userid;
 var pswrd;
function validate() {
userid = document.getElementById("user").value;
console.log(userid);
pswrd  = document.getElementById("pass").value;
console.log(pswrd);
    
     
if (userid == "rahul") { 
if (pswrd == "patel") {              
alert("hi")
location.href="mainpage.html";
} else {
alert("Invalid Password")
}
} else {  alert("Invalid UserID")
}
}
//-->
