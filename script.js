function initialize() {
    const copyButton = document.querySelector('.copiar');
    const image = document.querySelector('.background-image');
    const texto1 = document.querySelector('.texto1');
    const texto2 = document.querySelector('.texto2');

    copyButton.hidden = true; // Oculta o botão de copiar inicialmente
    image.hidden = false; // Exibe a imagem inicialmente
    texto1.hidden = false; // Exibe o texto1 inicialmente
    texto2.hidden = false; // Exibe o texto2 inicialmente
}

function toggleContentVisibility() {
    const image = document.querySelector('.background-image');
    const texto1 = document.querySelector('.texto1');
    const texto2 = document.querySelector('.texto2');
    const copyButton = document.querySelector('.copiar');
    const messageTextArea = document.querySelector('.message');

    if (messageTextArea.value !== "") {
        image.hidden = true;
        texto1.hidden = true;
        texto2.hidden = true;
        copyButton.hidden = false; // Exibe o botão de copiar quando houver mensagem
    } else {
        image.hidden = false;
        texto1.hidden = false;
        texto2.hidden = false;
        copyButton.hidden = true; // Oculta o botão de copiar quando não houver mensagem
    }
}

function btnEncriptar() {
    const inputText = document.querySelector('.input').value;
    const encryptedText = encryptText(inputText);
    document.querySelector('.message').value = encryptedText;
    toggleContentVisibility(); // Atualiza a exibição do botão copiar
}

function btnDesencriptar() {
    const inputText = document.querySelector('.input').value;
    const decryptedText = decryptText(inputText);
    document.querySelector('.message').value = decryptedText;
    toggleContentVisibility(); // Atualiza a exibição do botão copiar
}



function encryptText(text) {
    // Verifica se o texto contém letras maiúsculas, caracteres acentuados ou caracteres especiais
    if (/[A-ZÀ-ÖØ-Ý]/.test(text) || /[à-ú]/.test(text)) {
        alert('Por favor, utilize apenas letras minúsculas e sem acento.');
        return ''; // Retorna uma string vazia se caracteres inválidos forem encontrados
    }

    // Realiza a criptografia apenas se o texto estiver em conformidade
    const encryptedText = text.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    return encryptedText;
}


function decryptText(text) {
    const decryptedText = text.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    return decryptedText;
}

function btnCopy() {
    const messageTextArea = document.querySelector('.message');
    messageTextArea.select();
    document.execCommand('copy');
    toggleContentVisibility(); // Atualiza a exibição do botão copiar
}
