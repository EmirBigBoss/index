const setup = () => {
 let changeText = document.getElementById('change');
 changeText.addEventListener('click', TextButton);

}

const TextButton = () => {
    let paragraph = document.getElementById('child');
    let newParagraph = document.createTextNode('Good Job!');
    paragraph.removeChild(paragraph.firstChild);
    paragraph.appendChild(newParagraph);
    console.log(paragraph);
}

window.addEventListener("load", setup);