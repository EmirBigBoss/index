const setup = () => {
let list = document.querySelectorAll("li");
let newElement = document.createElement("img");
newElement.setAttribute("src", "1.jpg" );
newElement.setAttribute("style", "width:100px; margin-left:10px;")
for(let i =0; i < list.length; i++) {
    list[i].setAttribute("class", "listItem");
    list[i].setAttribute("style", "color:red;");
    console.log(list[i]);
}
document.body.appendChild(newElement);
}
window.addEventListener("load", setup);