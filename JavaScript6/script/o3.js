const setup = () => {
    let knop = document.getElementsByTagName("button");
    knop[0].addEventListener('click', button);
}

const button = () => {

    let div = document.getElementById('myDIV');
    let paragraph = document.createElement("p");
    let text = document.createTextNode("This is text");
    paragraph.appendChild(text);
    div.appendChild(paragraph);

    console.log(div);
}
window.addEventListener("load", setup);
