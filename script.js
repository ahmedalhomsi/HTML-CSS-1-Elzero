const icon = document.querySelector(".header .icon");
const span2 = document.querySelector(".header .icon span:nth-child(2)");
const ul = document.querySelector(".links ul");

span2.style.width = "60%";
ul.style.display = "none";
console.log(ul.style.display);
console.log(span2.style.width);

icon.addEventListener("click", () => {
    ul.style.display = "none";
    if (span2.style.width === "60%" && ul.style.display === "none") {
        span2.style.width = "100%";
        ul.style.display = "block";
        console.log("clicked One");
    } else {
        span2.style.width = "60%";
        ul.style.display = "none";
        console.log("clicked Two");
    }
});
