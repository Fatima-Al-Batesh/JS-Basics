var show = document.querySelector("#show");
var hide = document.querySelector("#hide");
var text = document.getElementById("texte");
show.addEventListener("click", function(){
    text.style.display = "block";
});
hide.addEventListener("click", function(){
    text.style.display = "none";
});
