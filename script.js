function encrypt(input) {
    return input.replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
}

function decrypt(input) {
    return input.replaceAll("ufat", "u")
        .replaceAll("ober", "o")
        .replaceAll("ai", "a")
        .replaceAll("imes", "i")
        .replaceAll("enter", "e");

}

function encryptButtonClicked() {
    const unencrypted = document.getElementById("text").value;
    document.getElementById("textResult").value = encrypt(unencrypted);
    document.getElementById("text").value = null;
}
    

function decryptButtonClicked() {
    const encrypted = document.getElementById("text").value;
    document.getElementById("textResult").value = decrypt(encrypted);
    document.getElementById("text").value = null;
}

function copy() {
    const text = document.getElementById("textResult").value;
    navigator.clipboard.writeText(text);
    
}

function textChanged(){
    //regex una constante con expresion regular que evalua que toda una string sea con minusculas
    const regex = /^[a-z,\s]*$/gm; 
    const text = document.getElementById("text").value;
    const disabled = regex.exec(text) == null;
    document.getElementById("encryptButton").disabled=disabled;
    document.getElementById("decryptButton").disabled=disabled;

}