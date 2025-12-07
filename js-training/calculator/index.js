const buttons = document.querySelectorAll("button");
const input = document.getElementById("input");

let currentInput = "";

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonID = this.id;

        switch(buttonID){
            case "clear":
                currentInput = "";
                input.value = currentInput;
                break;

            case "dot":
                currentInput = ".";
                input.value += currentInput;
                break;

            case "plus":
            case "minus":
            case "multiply":
            case "divide":
                currentInput = this.textContent;
                input.value += currentInput;
                break;

            case "result":
                function results(){
                    input.value = eval(input.value);
                }
                results()
                break;
            default:
                currentInput = this.textContent;
                input.value += currentInput;
                break;
        }
    }
)});