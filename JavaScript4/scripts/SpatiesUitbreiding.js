const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", split);
}

const split = () => {
    let input = document.getElementById("input");
    let inputValue = input.value;
    let spatieTekst = maakMetSpaties(inputValue);
    console.log(spatieTekst);
}

const maakMetSpaties = (tekst) => {
    let result = "";
    for (let i = 0; i < tekst.length; i++) {
        if(tekst.charAt(i) === " ") {
            result += "";
        }
        else {
        result += tekst.charAt(i) + " ";
        }
    }
    return result;
}
window.addEventListener("load", setup);