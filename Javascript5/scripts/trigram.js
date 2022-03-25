const setup = () => {
    let tekst = document.getElementById('trigram').textContent;
    
    let i = 0;
    let stop = false;
    let trigram = '';

    while (i < tekst.length && !stop) {

            if(i === tekst.length - 2) {
                trigram = (tekst[i] + tekst[i+1]);
                stop = true;
            }
            else if(i === tekst.length-1) {
                trigram = (tekst[i]);
                stop = true;
            }
            else {
                trigram = (tekst[i] + tekst[i+1] + tekst[i+2]);
            }

            

        console.log(trigram);
        i += 3;

    }
}
window.addEventListener("load", setup);