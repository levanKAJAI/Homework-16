function compareWords(word1, word2) {

    if (word1.length === word2.length) {
        return true;
    } else {
        return false;
    }

}

let word1 = prompt("შეიყვანეთ პირველი სიტვყა:");
let word2 = prompt("შეიყვანეთ მეორე სიტყვა:");

console.log(compareWords(word1, word2));