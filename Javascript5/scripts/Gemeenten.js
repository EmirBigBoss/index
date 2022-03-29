const setup = () => {
        let result = "";

        let stoppen = false;

        while (!stoppen){
            let input = window.prompt("Gemeente: ")

            if(input !== "stop"){
                result += input + " ";
            }

            else{
                stoppen = true;
            }
        }

        result = result.split(" ");

        result = result.sort();

        for (let i = 0; i<result.length; i++) {

            if(i !== result.length - 1){

                let option = '<option value= "' + result[i] + '">' + result[i] + '</option> <br>';
                document.getElementById("gemeente").innerHTML += option;

            }
        }

}
window.addEventListener("load", setup);