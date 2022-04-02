function naiveStringSearch(mainStr, searchStr) {
    let index = 0,
        length = mainStr.length - searchStr.length + 1,
        count = 0;
    for (;index<length;index++) {
        if ( mainStr[index] === searchStr[0] && mainStr.substring(index, index+searchStr.length) === searchStr ) {
            count++;
        }
    }
    return count;
}