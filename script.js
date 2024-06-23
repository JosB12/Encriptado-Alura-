document.addEventListener("DOMContentLoaded", function() {
    const textarea = document.getElementById("mensaje-Convertir");
    const placeholderContent = document.getElementById("placeholderContent");
    const resultTextArea = document.getElementById("Mensaje");
    const encriptarButton = document.getElementById("encriptar");
    const desencriptarButton = document.getElementById("desencriptar");
    const copiarButton = document.getElementById("copiar");

    function encriptar(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function desencriptar(textoEncriptado) {
        return textoEncriptado
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function validar(texto) {
        const regex = /^[a-z\s]*$/;
        return regex.test(texto);
    }

    encriptarButton.addEventListener("click", function() {
        const text = textarea.value.toLowerCase();
        if (text.trim() !== "" && validar(text)) {
            const encryptedText = encriptar(text);
            resultTextArea.value = encryptedText;
            resultTextArea.classList.remove("hidden");
            placeholderContent.classList.add("hidden");
        } else {
            alert("Ingrese solo letras minúsculas, sin acentos ni caracteres especiales.");
        }
    });

    desencriptarButton.addEventListener("click", function() {
        const text = textarea.value.toLowerCase();
        if (text.trim() !== "" && validar(text)) {
            const decryptedText = desencriptar(text);
            resultTextArea.value = decryptedText;
            resultTextArea.classList.remove("hidden");
            placeholderContent.classList.add("hidden");
        } else {
            alert("Ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        }
    });

    copiarButton.addEventListener('click', function() {
        resultTextArea.select();
        document.execCommand('copy');
    });
});