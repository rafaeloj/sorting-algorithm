/*
 * Wrost case O(n^2)
 * Average case O(n^2)
 * Best case O(n^2)
 */
const selectionSort = function(arr) {
    for(let i=0; i < arr.length-1;i++){
        let j=i;
        for(let k=i+1; k < arr.length;k++){
            if (arr[k] < arr[j]) {
                j = k;
            }
        }
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}

console.log(selectionSort([8,0,10,7,4,2,11]))