var imgs = document.querySelectorAll("img");

Array.from(imgs).forEach((img, i) => {
    img.addEventListener('mouseover', function () {
        img.src = "images/image" + (i + 1) + "_2.jpg";
    })
});
