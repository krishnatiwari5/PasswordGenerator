const characterAmountRange = document.getElementById('characterAmountRange');
const characterAmountNumber = document.getElementById('characterAmountNumber');
const includeUppercaseElement = document.getElementById('includeUppercase');
const includeNumbersElement = document.getElementById('includeNumbers');
const includeSymbolsElement = document.getElementById('includeSymbols');
const form = document.getElementById('passwordgeneratorform')
const passwordDisplay = document.getElementById('passwordDisplay');
const UPPERCASE_CHAR_CODES = arryFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arryFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arryFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arryFromLowToHigh(33, 47).concat(arryFromLowToHigh(58, 64)).concat(arryFromLowToHigh(91, 96));


characterAmountRange.addEventListener('input', syncCharacterAmount);
characterAmountNumber.addEventListener('input', syncCharacterAmount);

function syncCharacterAmount(e) {
    const value = e.target.value;
    characterAmountNumber.value = value;
    characterAmountRange.value = value;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const characterAmount = characterAmountNumber.value;
    const includeNumbers = includeNumbersElement.checked;
    const includeSymbols = includeSymbolsElement.checked;
    const includeUppercase = includeUppercaseElement.checked;
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
    passwordDisplay.innerText = password;
})


function generatePassword (characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES;
    if(includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if(includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
    if(includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
const passwordCharacters = [];
    for(let i=0; i < characterAmount; i++) {
const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)];
passwordCharacters.push(String.fromCharCode(characterCode))
    }

    return passwordCharacters.join('');
}

function arryFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high;i++) {
array.push(i);

    }
    return array;
}