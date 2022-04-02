function binarySearch(arr, ele) {
    return searchIndex(arr, 0, arr.length-1, ele);    
}
function searchIndex(arr, startIndex, endIndex, ele) {
    if ( startIndex === endIndex ) {
        return arr[startIndex] === ele ? startIndex: -1;
    } else {
        let middleEle = Math.floor((endIndex - startIndex )/2) + startIndex;
        if ( arr[middleEle] === ele ) {
            return middleEle;
        } else if ( arr[middleEle] < ele ) {
            return searchIndex(arr, middleEle+1, endIndex, ele);
        } else {
            return searchIndex(arr, startIndex, middleEle, ele);
        }
    }
}