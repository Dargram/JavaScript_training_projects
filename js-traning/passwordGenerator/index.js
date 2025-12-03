const input = document.getElementById("password");
const btn = document.getElementById("generateBtn");
let alphabet = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-!@#$%^&*()_+{}:`~?";
let result = "";

btn.onclick = function(){
    for(let i=0; i < 15; i++){
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        result += alphabet[randomIndex]
    }
    input.value = result;
    result = ""
}