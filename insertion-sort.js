/*
 * Insertion-Sort it's a simple algorithm to data ordenation
 * your big O notation is:
 * O(n) in the best case
 * O(n²) in the wrost case
 * 
 */

const insertionSort = function(arr){                  // 2*Θ(1)+4*O(n)+O(n^2)
    let k,i,j=0;                                      // Θ(1)
    for (i = 2; i < arr.length; i++) {                // O(n)
        j = i-1;                                      // O(n)
        k = arr[i];                                   // O(n)
        while ( j > 0 && arr[j] > k ) {               // O(n)
            arr[j+1] = arr[j];                        // O(n)
            j--;                                      // O(n)
        }
        arr[j+1] = k;                                 // O(n)
    }
    return arr;                                       // Θ(1)
}

console.log(insertionSort([5, 26, 9, 32, 10]));
