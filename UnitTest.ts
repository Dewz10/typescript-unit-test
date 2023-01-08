//Time Complexity: O(N log(N))

function mergeSort (unsortedArray:number[]):any {

    let len = unsortedArray.length;

    if(len < 2) {
        return unsortedArray;
    }
    const half = Math.floor(len/2);
    const leftSide = unsortedArray.slice(0, half);
    const rightSide = unsortedArray.slice(half, len);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge (leftSide:number[], rightSide:number[]):number[] {

    let result = [];
    let l = 0; //leftIndex
    let r = 0; //rightIndex

  while(l < leftSide.length && r < rightSide.length) {
    if(leftSide[l] < rightSide[r]) {
      result.push(leftSide[l]);
      l++; // move left array cursor
    } else {
      result.push(rightSide[r]);
      r++; // move right array cursor
    }
  }

  return result.concat(leftSide.slice(l)).concat(rightSide.slice(r));
}

//const array = [7,3,2,16,24,4,11,9];
//console.log(mergeSort(array));
module.exports = mergeSort;