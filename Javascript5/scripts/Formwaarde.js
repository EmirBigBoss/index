const setup = () => {
    let button = document.getElementById('button');
    button.addEventListener('click',functie);
}



window.addEventListener("load", setup);
const functie = () => {
    let roker = document.getElementById('roker').checked;
    let taal1 = document.getElementById('Ned').checked;
    let taal2 = document.getElementById('Eng').checked;
    let taal3 = document.getElementById('Frans').checked;

    let buurland = document.getElementById('neighbour');
    let land = buurland.options[buurland.selectedIndex].text

    let order1 = document.getElementById('order');
    let order = order1.options[order1.selectedIndex].text;



    if(roker) {
        console.log('Is een roker.');
    }
    else if(!roker) {
        console.log('Is geen roker.');
    }

    if(taal1) {
        console.log('Moedertaal is Nederlands.');
    }
    else if(taal2) {
        console.log('Moedertaal is Engels.');
    }
    else if(taal3) {
        console.log('Moedertaal is Frans.');
    }

    console.log('Favoriete buurland is ' + land);

    console.log('Bestelling bestaat uit ' + order);
}