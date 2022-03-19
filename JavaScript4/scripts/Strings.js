const setup = () => {
    let result = document.getElementsByClassName("answer");

    let leeftijd = 34;
    result[0].innerHTML+= typeof leeftijd;
    let intrest = 0.12;
    result[1].innerHTML+= typeof intrest;
    let isGevaarlijk=true;
    result[2].innerHTML+= typeof isGevaarlijk;
    let vandaag = new Date();
    result[3].innerHTML+= typeof vandaag;
    result[4].innerHTML+= typeof print();
}

const print = (message) => {
    console.log(message);
}

window.addEventListener("load", setup);
window.addEventListener("load", print);