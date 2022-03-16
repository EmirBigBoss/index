const setup = () => {
	let button = document.getElementById("herbereken");

	button.addEventListener("click", opdracht);

}

const opdracht = () => {

	let prijs = document.getElementsByClassName("prijs");
	let product1 = parseFloat(prijs[0].textContent).toFixed(2);
	let product2 = parseFloat(prijs[1].textContent).toFixed(2);
	let product3 = parseFloat(prijs[2].textContent).toFixed(2);

	let aantal = document.getElementsByClassName("numeric");
	let aantal1 = aantal[0].value;
	let aantal2 = aantal[1].value;
	let aantal3 = aantal[2].value;


	let btw= document.getElementsByClassName("btw");
	let btw1= parseFloat(btw[0].textContent).toFixed(2);
	let btw2= parseFloat(btw[1].textContent).toFixed(2);
	let btw3= parseFloat(btw[2].textContent).toFixed(2);

	let subtotaal= document.getElementsByClassName("out");
	let subtotaal1= parseFloat((product1 * aantal1) * ((btw1+ 100) / 100) + (prijs1* aantal1)).toFixed(2);
	let subtotaal2= parseFloat((product2 * aantal2) * ((btw2 + 100) / 100) + (prijs2 * aantal2)).toFixed(2);
	let subtotaal3= parseFloat((product3 * aantal3) * ((btw3+ 100) / 100) + (prijs3 * aantal3)).toFixed(2);
	subtotaal[0].textContent= subtotaal1;
	subtotaal[1].textContent= subtotaal2;
	subtotaal[2].textContent = subtotaal3;

	let totaal= document.getElementById("total");
	totaal.textContent= (parseFloat(subtotaal1)+parseFloat(subtotaal2)+parseFloat(subtotaal3)).toFixed(2);




}

window.addEventListener("load", setup);
