function isAnagram(str1, str2) {
    let str1Arr = str1.split('');
    let str2Arr = str2.split('');
    let str2Length = str2Arr.length;
    let keysCount = {};
    let isAnagram = true;
    let index = 0;
    if ( str1.length !== str2.length ) {
        return false;
    }
    str1Arr.forEach((key) => {keysCount[key] = keysCount[key]?(keysCount[key]+1):1})
    for (;index<str2Length;index++) {
        if (!keysCount[str2Arr[index]]) {
            isAnagram = false;
            break
        } else {
            keysCount[str2Arr[index]]--;
        }
    }
    return isAnagram;
}