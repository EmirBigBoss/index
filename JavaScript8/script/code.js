let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // indien ok, bewaar de ingegeven data.
        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan
    let selectBox = document.getElementById('lstPersonen');
    let form = document.getElementsByTagName('form');
    let newOption = document.createElement('option');
    newOption.setAttribute('class', 'option');


    let found = false;
    let i = 0;

    while(i < form[0].length-1 && !found) {

        if (form[0].getElementsByClassName('line')[i].querySelector('input').classList.contains('invalid')) {
            found = true;
        }
        else {
            i++;
        }

    }


    let foundForm = false;
    let j = 0;
    if(personen.length !== 0) {
        while (j < personen.length && !foundForm) {
            console.log(personen[j].getElementsByClassName('line')[0].querySelector("input").value === form[0].getElementsByClassName('line')[0].querySelector("input").value);
            if (personen[j].getElementsByClassName('line')[0].querySelector("input").value === form[0].getElementsByClassName('line')[0].querySelector("input").value
            && personen[j].getElementsByClassName('line')[1].querySelector("input").value === form[0].getElementsByClassName('line')[1].querySelector("input").value) {
                foundForm = true;
            }
            else {
                j++;
            }
        }
    }


    //if(!foundForm) {
        if (found === false) {
            personen.push(form[0]);

            for (let j = 0; j < 2; j++) {
                newOption.append(form[0].getElementsByClassName('line')[j].getElementsByTagName('input')[0].value);
                newOption.append(' ');
            }

            console.log(personen[0]);
            selectBox.appendChild(newOption);
        }
    //}

        console.log(form[0].getElementsByClassName('line')[0].querySelector("input").value);
    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");



    let form = document.getElementsByTagName('form');
    console.log(form[0].getElementsByClassName('line')[0].querySelector("input").value)
    form[0].getElementsByClassName('line')[0].querySelector("input").value = "";
    form[0].getElementsByClassName('line')[1].querySelector("input").value = "";
    form[0].getElementsByClassName('line')[2].querySelector("input").value = "";
    form[0].getElementsByClassName('line')[3].querySelector("input").value = "";
    form[0].getElementsByClassName('line')[4].querySelector("input").value = "";


    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};

const gegevensOpInput = () => {

    let text = 'ass'
    console.log(text);
}


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById('lstPersonen');
    lstPersonen.addEventListener('click', function () {
        let form = document.getElementsByTagName('form');
        console.log(personen);
    console.log(lstPersonen.firstElementChild.firstChild.textContent === personen[0].getElementsByClassName('line')[0].querySelector("input").value);

        let foundForm = false;
        let i = 0;
        while (i < personen.length && !foundForm) {
            if (personen[i].getElementsByClassName('line')[0].querySelector("input").value === lstPersonen.firstElementChild.firstChild.textContent
                && personen[i].getElementsByClassName('line')[1].querySelector("input").value === lstPersonen.firstElementChild.lastChild.textContent) {
                let txtVoornaam = document.getElementById("txtVoornaam");
                txtVoornaam.value = personen[i].getElementsByClassName('line')[0].querySelector("input").value;
                let txtFamilienaam =  document.getElementById("txtFamilienaam");
                txtFamilienaam.value = personen[i].getElementsByClassName('line')[1].querySelector("input").value;
                let txtGeboortedatum =  document.getElementById("txtGeboorteDatum");
                txtGeboortedatum.value = personen[i].getElementsByClassName('line')[2].querySelector("input").value;
                let txtEmail =  document.getElementById("txtEmail");
                txtEmail.value = personen[i].getElementsByClassName('line')[3].querySelector("input").value;
                let txtAantalKinderen =  document.getElementById("txtAantalKinderen");
                txtAantalKinderen.value = personen[i].getElementsByClassName('line')[4].querySelector("input").value;
            }
            else {
                i++;
            }
        }

    });
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);