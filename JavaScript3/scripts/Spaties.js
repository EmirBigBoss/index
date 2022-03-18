const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", split);
}

const split = () => {
    let input = document.getElementById("input");
    let inputModi = input.value.split(' ').join('');
    console.log(inputModi.split('').join(' '));
}
window.addEventListener("load", setup);