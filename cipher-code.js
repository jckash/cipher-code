

const cipher = (message) => {
    let alphabet ='abcdefghijklmnopqrstuvwxyz';
    let reversedAlphabet = alphabet.split('').reverse()

    let cipheredMessage = '';
for (let i=0; i <message.length; i++) {
    let char = message[i].toLowerCase();
    let index = alphabet.indexOf(char);

    if (index !== -1) {
        let cipheredMessage = reversedAlphabet[index];
        if (message[i] === message[i].toUppercase()) {
            cipheredChar = cipheredChar.toUppercase();
        }
        cipheredMessage += cipheredChar;
    } else {
        cipheredMessage += message[i];
    }
}

return cipheredMessage;
}

var plainText = ('Hello, World!');
var ciphertext = cipher(plainText);
console.log('Ciphertext:', ciphertext);