const setup = () => {
    let St1 = document.getElementById('1').textContent;
    let St2 = document.getElementById('2').textContent;
    let St3 = document.getElementById('3').textContent;
    let St4 = document.getElementById('4').textContent;
//==========================================================
    if(St1 == St2){
        console.log(true);
    }
    else{
        console.log(false);
    }
//==========================================================
    if(St1 === St2){
        console.log(true)
    }
    else{
        console.log(false)
    }
//==========================================================
    if(St4 == St1.substring(0,7)){
        console.log(true);
    }
    else{
        console.log(false)
    }
//==========================================================
    if(St4 === St1.substring(0,7)){
        console.log(true);
    }
    else{
        console.log(false)
    }
//==========================================================
    if(St4 == St1.substring(0,8)){
        console.log(true);
    }
    else{
        console.log(false)
    }
//==========================================================
    if(St4 + 'a String' == St1){
        console.log(true);
    }
    else{
        console.log(false)
    }
//==========================================================
    if(St4 + 'a String' === St1){
        console.log(true);
    }
    else{
        console.log(false)
    }

}
window.addEventListener("load", setup);