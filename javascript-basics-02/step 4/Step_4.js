 var name1 = document.getElementById("name");
var surname = document.getElementById("surname");
var city = document.getElementById("city");
var button1= document.querySelector('button');
button1.addEventListener('click', reset);
function reset() {
    if (confirm('Are you sure you want to reset the form?')) {
        name1.value = '';
        surname.value = '';
        city.value = '';
    }
}
    

