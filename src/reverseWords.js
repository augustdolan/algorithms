function reverseWords(messageArr) {
    const originalSentence = messageArr.join();
    const splitWords = originalSentence.split(' ');

    for (let i = splitWords.length - 1; i >= 0; i--) {
        reverseSentence += splitWords[i];
    }

    return reverseSentence;
}