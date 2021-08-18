function countUniqueValues (arr) {
    let i = 0, len = arr.length, j, count = 1;
    while (i<len-1) {
        j = i+1;
        while (arr[j] == arr[i] && j < arr.length) {
            j++;
        }
        if (j >= arr.length) { 
            break; 
        } else {
            i = j;
            count++;
        }         
    }
    return count;
}