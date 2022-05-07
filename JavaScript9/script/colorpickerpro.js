let array = [];

let arrayForStorage = [];

let sliders = document.getElementsByClassName("slider");


const setup = () => {

    sliders[0].addEventListener("input", update);

    sliders[1].addEventListener("input", update);

    sliders[2].addEventListener("input", update);

    let button = document.getElementsByTagName("button");
    button[0].addEventListener('click', save)


    let savedColors = document.getElementById('saved');


    let red;
    let green;
    let blue;
    if(localStorage.getItem('colorData') !== null) {
        for(let i = 0; i<JSON.parse(localStorage.getItem('colorData')).length; i++) {
            let div = document.createElement('div');
            let removeButton = document.createElement("button");
            let x = document.createTextNode('X');

            removeButton.appendChild(x);
            removeButton.setAttribute('style', 'float:right;');
            removeButton.setAttribute('class', 'delete')

            removeButton.appendChild(x);
            div.appendChild(removeButton);


            div.setAttribute('class', 'savedColor');
            red = JSON.parse(localStorage.getItem('colorData'))[i][0];
            green = JSON.parse(localStorage.getItem('colorData'))[i][1];
            blue = JSON.parse(localStorage.getItem('colorData'))[i][2];

            div.setAttribute('style', 'background: rgb(' + red + ', ' + green + ', ' + blue + ');');
            savedColors.append(div);

        }

        let savedColor2 = document.getElementsByClassName('savedColor');
        for(let i = 0; i < savedColor2.length; i++) {
            savedColor2[i].addEventListener('click', setColor2);
        }
    }

    let remove = document.getElementsByClassName('delete');
    for(let i = 0; i < remove.length; i++) {

        remove[i].addEventListener('click', takeAway);

    }

    if(localStorage.getItem('colorData') !== null) {
        for(let i = 0; i<JSON.parse(localStorage.getItem('colorData')).length; i++) {
            arrayForStorage.push(JSON.parse(localStorage.getItem('colorData'))[i]);
        }
    }

}

const setColor = (e) => {
    let oldColor = document.getElementsByClassName('colorDemo');

    let currentRGB = e.currentTarget.getAttribute('style');
    console.log(('background: rgb(' + array[0][0] + ', ' + array[0][1] + ', ' + array[0][2] + ');') === currentRGB);

    oldColor[0].setAttribute('style', currentRGB);

    let red = document.getElementById('red');
    let green = document.getElementById('green');
    let blue = document.getElementById('blue');


    let i = 0;
    let stop = false;

    while(i < array.length && !stop) {
        if(('background: rgb(' + array[i][0] + ', ' + array[i][1] + ', ' + array[i][2] + ');') === currentRGB) {
            stop = true;

            red.removeChild(red.lastChild);
            red.append(array[i][0]);

            green.removeChild(green.firstChild);
            green.append(array[i][1]);

            blue.removeChild(blue.firstChild);
            blue.append(array[i][2]);

            sliders[0].value = array[i][0];
            sliders[1].value = array[i][1];
            sliders[2].value = array[i][2];
        }
        else {
            i++;
        }
   }
}

const setColor2 = (e) => {
    let oldColor = document.getElementsByClassName('colorDemo');

    let currentRGB = e.currentTarget.getAttribute('style');

    oldColor[0].setAttribute('style', currentRGB);

    let red = document.getElementById('red');
    let green = document.getElementById('green');
    let blue = document.getElementById('blue');


    let i = 0;
    let stop = false;

    while(i < JSON.parse(localStorage.getItem('colorData')).length && !stop) {
        if(('background: rgb(' + JSON.parse(localStorage.getItem('colorData'))[i][0] + ', ' + JSON.parse(localStorage.getItem('colorData'))[i][1] + ', ' + JSON.parse(localStorage.getItem('colorData'))[i][2] + ');') === currentRGB) {
            stop = true;

            red.removeChild(red.lastChild);
            red.append(JSON.parse(localStorage.getItem('colorData'))[i][0]);

            green.removeChild(green.firstChild);
            green.append(JSON.parse(localStorage.getItem('colorData'))[i][1]);

            blue.removeChild(blue.firstChild);
            blue.append(JSON.parse(localStorage.getItem('colorData'))[i][2]);

            sliders[0].value = JSON.parse(localStorage.getItem('colorData'))[i][0];
            sliders[1].value = JSON.parse(localStorage.getItem('colorData'))[i][1];
            sliders[2].value = JSON.parse(localStorage.getItem('colorData'))[i][2];
        }
        else {
            i++;
        }
    }
}


//Slider//
const update = () => {
    let slidersRed = document.getElementById("slider red");
    let r = slidersRed.value;

    let slidersGreen = document.getElementById("slider green");
    let g = slidersGreen.value;

    let slidersBlue = document.getElementById("slider blue");
    let b = slidersBlue.value;

    let colorDemo = document.getElementsByClassName("colorDemo");
    red.innerHTML = r;
    green.innerHTML = g;
    blue.innerHTML = b;

    let color = 'rgb('+r+', ' + g + ', '+b+')';
    colorDemo[0].style.background = color;

}

const takeAway = (e) => {
    let colorToRemove = e.currentTarget.parentElement;
    colorToRemove.remove();

    let i = 0;
    let stop =false;
    while(i < arrayForStorage.length && !stop) {
        if('background: rgb(' + arrayForStorage[i][0] + ', ' + arrayForStorage[i][1] + ', ' + arrayForStorage[i][2] + ');' === e.currentTarget.parentElement.getAttribute('style')) {
            arrayForStorage.splice(i,1);
            stop = true;

        }
        else {
            i++;
        }
    }
    let colorsInStorage = JSON.stringify(arrayForStorage);
    localStorage.setItem('colorData', colorsInStorage);
}


//Save button//
const save = () => {


    let safeSpace = document.getElementById('saved');
    let chosenColor = document.getElementsByClassName('colorDemo')[0].getAttribute('style');

    let savedColor = document.createElement('div');
    savedColor.setAttribute('style', chosenColor);
    savedColor.setAttribute('class','savedColor');
    let removeButton = document.createElement("button");
    let x = document.createTextNode('X');

    removeButton.appendChild(x);
    removeButton.setAttribute('style', 'float:right;');
    removeButton.setAttribute('class', 'delete')

    savedColor.appendChild(removeButton);
    safeSpace.appendChild(savedColor);

    let remove = document.getElementsByClassName('delete');
    for(let i = 0; i < remove.length; i++) {

        remove[i].addEventListener('click', takeAway);

    }


    let value1 = sliders[0].value;
    let value2 = sliders[1].value;
    let value3 = sliders[2].value;

    let valueArray = [];

    valueArray.push(value1);
    valueArray.push(value2);
    valueArray.push(value3);

    array.push(valueArray);




    let savedColor2 = document.getElementsByClassName('savedColor');
    for(let i = 0; i < savedColor2.length; i++) {
        savedColor2[i].addEventListener('click', setColor);
    }

    arrayForStorage.push(valueArray);

//===============================================================================

    let colorsInStorage = JSON.stringify(arrayForStorage);
    localStorage.setItem('colorData', colorsInStorage);

    console.log(colorsInStorage);

}

window.addEventListener("load", setup);
window.addEventListener("load", update);