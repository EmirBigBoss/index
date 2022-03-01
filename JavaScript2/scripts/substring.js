const setup = () => {
    
    let btnSubstring = document.getElementById("substring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    
    let txtOutput = document.getElementById("txtOutput");
    let txtInput = document.getElementById("text");
    let number1 = document.getElementById("number").value;
    let number2 = document.getElementById("number2").value;
    let result = txtInput.value;

    txtOutput.innerHTML = result.substring(number1,number2);
}

window.addEventListener('load',setup);