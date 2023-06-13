/**
 * 
 * O: technically undefined, changes array in place
 * I: an array
 * C: None
 * E: 0 and 1 element arrays are simply returned
 * 
 * The main complication of this function is to modify the array in place without losing data as we do so
 * To do this, we can take the mirror of each side of the array and swap the places of them
 */

function reverseArray(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        const mirrorIndex = array.length - 1 - i;

        const leftElement = array[i];
        const mirrorElement = array[mirrorIndex];
        
        array[i] = mirrorElement;
        array[mirrorIndex] = leftElement;
    }
}