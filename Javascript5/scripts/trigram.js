const setup = () => {
    let tekst = document.getElementById('trigram').textContent;

    let i = 0;
    let stop = false;
    let trigram = '';

    while (i < tekst.length && !stop) {
        if(i === tekst.length-3) {
            stop = true;
        }
        trigram = (tekst[i] + tekst[i+1] + tekst[i+2]);

        console.log(trigram);
        i += 1;

    }
}
window.addEventListener("load", setup);