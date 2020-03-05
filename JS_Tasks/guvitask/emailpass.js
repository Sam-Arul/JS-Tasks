var div1 = document.createElement('div');
document.body.appendChild(div1);
div1.id='div1';
div1.innerHTML = "Enter your Email:"
var email=document.createElement('input');
email.type="text";
div1.appendChild(email);
var div2=document.createElement('div');
document.body.appendChild(div2);
div2.id='div2';
div2.innerHTML = "Enter your password:"
var Password=document.createElement('input');
Password.type="password";
div2.appendChild(Password);
var button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = 'Submit';
button.onclick = function(){
if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)))
{
alert("email address or phone number is invalid");
}
if(Password.value.length<8){

alert("Password should be 8 characters long");
}
};