/*
 * O(n^2) wrost case
 * O(n^2) average case
 * O(n)   best case  
 */

export      const bubbleSort = function(arr){
    for(let i=0; i < arr.length; i++){
        for(let j=0; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                let v = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = v;
            }
        }
    }
    return arr
}

console.log(bubbleSort([8,7,6,5,4,3,2,1]))