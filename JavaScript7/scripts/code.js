let global = {
    IMAGE_COUNT: 5,  // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/",  // map van de figuren
    IMAGE_PATH_SUFFIX: ".png",  // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0,    // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};




const setup = () => {

    let button = document.getElementsByTagName("button");
    button[0].addEventListener("click", knop);
    let currentImg = document.getElementsByTagName("img");
    let randomImage = Math.floor(Math.random()*global.IMAGE_COUNT);
    currentImg[0].setAttribute("src", global.IMAGE_PATH_PREFIX + randomImage.toString(10) + global.IMAGE_PATH_SUFFIX);
    currentImg[0].setAttribute("style", 'size: ' + global.IMAGE_SIZE.toString(10) + 'px;');


    let score = document.getElementsByClassName("score");
    let numberText = document.createTextNode(global.score.toString(10));
    let scoreElement = document.createElement('div');
    scoreElement.appendChild(numberText);
    score[0].appendChild(scoreElement);
}


const newPic = () => {
    let oldImg = document.getElementsByClassName("currentImage")[0];


    let randomImageNumber = Math.floor(Math.random()*global.IMAGE_COUNT);
    oldImg.setAttribute("src", global.IMAGE_PATH_PREFIX + randomImageNumber.toString(10) + global.IMAGE_PATH_SUFFIX);


    let speelveld=document.getElementById("playField");
    let maxLeft=speelveld.clientWidth - oldImg.offsetWidth;
    let maxHeight=speelveld.clientHeight - oldImg.offsetHeight;

    // verplaats de sprite
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    oldImg.style.left=left+"px";
    oldImg.style.top=top+"px";

    oldImg.addEventListener('click', score);

    clearInterval(global.timeoutId);
    global.timeoutId = setInterval(knop, global.MOVE_DELAY);

}

const score = () => {
    //Aantal hits registreren
    let score = document.getElementsByClassName("score");

    let aantalHits = parseInt(score[0].firstElementChild.firstChild.textContent);
    aantalHits++;
    global.score = aantalHits;
    let numberText = document.createTextNode(aantalHits.toString(10));
    let scoreElement = document.createElement('div');
    scoreElement.appendChild(numberText);

    score[0].removeChild(score[0].firstElementChild);
    score[0].appendChild(scoreElement);

    let oldImg = document.getElementsByClassName("currentImage")[0];
    if(oldImg.getAttribute('src') === global.IMAGE_PATH_PREFIX + '0' + global.IMAGE_PATH_SUFFIX) {
        global.score --;
        if(!window.alert('GAME OVER \nyour score is ' + global.score)) {
            window.location.reload();
        }
        clearInterval(global.timeoutId);
    }

}



const knop = () => {
    let button = document.getElementsByTagName("button");
    button[0].classList.add("hiddenButton");
    newPic();
    clearInterval(global.timeoutId);
    global.timeoutId = setInterval(newPic, global.MOVE_DELAY);


    let currentImg = document.getElementsByTagName("img");
    currentImg[0].addEventListener("click", newPic);

}





window.addEventListener("load", setup);


