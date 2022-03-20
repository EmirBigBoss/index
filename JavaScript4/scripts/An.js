const setup = () => {
let tekst = document.getElementById("manVanAn").textContent.toLowerCase();

let aantal = document.getElementsByClassName("hoeveelheid");

//==================================================================================
// Via indexOf
let teller = 0;
let index = tekst.indexOf("an");
while(index >= 0) {
        teller ++;
        index ++;
        index = tekst.indexOf("an", index);
}
    console.log(teller);
    aantal[0].innerHTML= teller;
//==================================================================================
// Via lastIndexOf
    let teller2 = 0;
    let index2 = tekst.lastIndexOf("an");
    while(index2 >= tekst.indexOf("an")){
        index2 --;
        index2 = tekst.lastIndexOf("an", index2);
        teller2 ++;
    }
    console.log(teller2);
    aantal[1].innerHTML = teller2;
}


window.addEventListener("load", setup);