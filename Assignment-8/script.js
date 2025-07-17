const char_icon = document.querySelectorAll(".character img");
const colorBoxes = document.querySelectorAll(".colors div");
const charseen = document.querySelector(".charseen")
const Changes = document.getElementById("changes")

char_icon.forEach(img => {
    img.addEventListener("click", () => {
        charseen.innerHTML = ""
        const newimg = document.createElement("img");
        newimg.src = img.src;
        newimg.style.width = "100%";
        newimg.style.height = "100%";
        newimg.style.objectFit = "contain";
        charseen.appendChild(newimg);
    });
});

colorBoxes.forEach(box => {
    box.addEventListener("click", () => {
        const bgColor = box.dataset.color;
        Changes.style.backgroundColor = bgColor;
    });
});
