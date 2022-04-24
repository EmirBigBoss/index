let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,

};


const setup = () => {
    let speelveld = document.getElementsByClassName('playField');

    let array = ["kaart1.jpg", "kaart2.jpg", "kaart3.jpg", "kaart4.jpg", "kaart5.jpg", "kaart6.jpg"
        , "kaart1.jpg", "kaart2.jpg", "kaart3.jpg", "kaart4.jpg", "kaart5.jpg", "kaart6.jpg"];

    let cards= document.createElement('div');
    cards.setAttribute('class', 'cards');

    speelveld[0].appendChild(cards);

   for(let i = 0; i < global.AANTAL_KAARTEN*2; i++) {

       let card = document.createElement('div');
       card.setAttribute('class', 'card');

       let front = document.createElement('div');
       front.setAttribute('class', 'view front-view');
       let cardBackImage = document.createElement('img');
       cardBackImage.setAttribute('src', 'images/front.jpg');
       cardBackImage.setAttribute('class', 'material-icons');

       let back = document.createElement('div');
       back.setAttribute('class', 'view back-view');
       let cardFrontImage = document.createElement('img');
       let chosenCard = Math.floor(Math.random()*array.length);

       if(array[chosenCard]!=null) {
       cardFrontImage.setAttribute('src', 'images/' + array[chosenCard]);

       }
       array.splice(chosenCard,1);

       front.appendChild(cardBackImage);
       back.appendChild(cardFrontImage);

       card.appendChild(front);
       card.appendChild(back);

       cards.appendChild(card);



       console.log(cardFrontImage);
   }

    const listOfCards = document.querySelectorAll(".card");
    for(let i=0; i < listOfCards.length; i++) {
        listOfCards[i].addEventListener('click', flip);
    }
}




const flip = (e) => {
    let amount = 0;
    let gedraaideKaarten = [];
    let gedraaideKaartenLink = [];
    let clicked = e.target;
    console.log(clicked);

    if(amount < 2 && gedraaideKaartenLink[0]!==clicked) {
        clicked.classList.add('flip');

        if(amount===0) {
            gedraaideKaarten[0] = clicked.lastElementChild.lastChild;
            gedraaideKaartenLink[0] = clicked;
        }
        else {
            gedraaideKaarten[1] = clicked.lastElementChild.lastChild;
            gedraaideKaartenLink[1] = clicked;
        }
        amount++;
    }

    /*let card1 = clicked;
    let card2 = clicked;*/


}



const check = () => {
    console.log(flip.amount);

}


window.addEventListener("load", setup);


