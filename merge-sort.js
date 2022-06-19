/*
 * Wrost case O(nlog(n))
 * Average case O(nlog(n))
 * Best case O(nlog(n))
 */
const conquer = function (arr, i , j){
    let s, m, aux;
    s = i;
    m = ((i+j)/2) >> 0;
    k = m+1;
    aux = Array();
    while ( i <= m || k <= j) {
        if (i > m) {
            aux.push(arr[k]);
            k++;
        } else if (k > j) {
            aux.push(arr[i]);
            i++;
        } else if (arr[i] < arr[k]) {
            aux.push(arr[i]);
            i++;
        } else {
            aux.push(arr[k]);
            k++;
        }
    }
    for (let v=0; v < aux.length; v++) {
        arr[s+v] = aux[v];
    }
    return arr;
}
const divider = function (arr, i, j){
    if ( i >= j) {
        return arr;
    } else {
        let m = (j+i)/2 >> 0; // Floor
        divider(arr, i, m);
        divider(arr, m+1, j);
        return conquer(arr, i, j);
    }
}

const mergeSort = function(arr) {
    return divider(arr, 0, arr.length-1);
}
console.log(mergeSort([10,8,7,12,6,8,10,29,46,713,4613,357,0,1,2,3,4,9,5]))