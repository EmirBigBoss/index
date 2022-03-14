const setup = () => {
	let sliders = document.getElementsByClassName("slider")
	sliders[0].addEventListener("input", update);

	sliders[1].addEventListener("input", update);

	sliders[2].addEventListener("input", update);



}

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
	console.log(color);
	colorDemo[0].style.background = color;

}

window.addEventListener("load", setup);
window.addEventListener("load", update);