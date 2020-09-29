var div = document.createElement('div');
document.body.appendChild(div);

var name1 = document.getElementById("name");
name1.addEventListener("change",function(){
    div.innerHTML=name1.value;
});

