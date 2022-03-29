const setup = () => {
    let tekst = document.getElementById('lidwoord').textContent.toLowerCase();
    let HTML = tekst.split('de');
    let hetWoord = '';

    if(HTML[0].startsWith(' ')) {
        hetWoord += 'Het' + HTML[0];
    }
    else {
        hetWoord += HTML[0];
    }

        for(let i = 1; i < HTML.length; i++) {

            if(hetWoord.endsWith('het')) {
                hetWoord += HTML[i] + 'het';
            }
            else {
                hetWoord += 'het' + HTML[i];
            }


        }




    console.log(hetWoord.substring(0,1).toUpperCase()+hetWoord.substring(1));
}
window.addEventListener("load", setup);