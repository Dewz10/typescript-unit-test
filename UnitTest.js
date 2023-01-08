//Time Complexity: O(N log(N))
function mergeSort(unsortedArray) {
    var len = unsortedArray.length;
    if (len < 2) {
        return unsortedArray;
    }
    var half = Math.floor(len / 2);
    var leftSide = unsortedArray.slice(0, half);
    var rightSide = unsortedArray.slice(half, len);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
}
function merge(leftSide, rightSide) {
    var result = [];
    var l = 0; //leftIndex
    var r = 0; //rightIndex
    while (l < leftSide.length && r < rightSide.length) {
        if (leftSide[l] < rightSide[r]) {
            result.push(leftSide[l]);
            l++; // move left array cursor
        }
        else {
            result.push(rightSide[r]);
            r++; // move right array cursor
        }
    }
    return result.concat(leftSide.slice(l)).concat(rightSide.slice(r));
}
//const array = [7,3,2,16,24,4,11,9];
//console.log(mergeSort(array));
module.exports = mergeSort;
