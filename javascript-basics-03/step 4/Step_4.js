var password = document.getElementById("password");
var confirmation = document.getElementById("confirmation");
var button = document.querySelector("button");

button.addEventListener("click",function(){
    if(password.value != confirmation.value){
        password.style="border:solid red;"
        confirmation.style="border:solid red;"
    }
});