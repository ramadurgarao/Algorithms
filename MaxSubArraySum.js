function maxSubArraySum(arr, n) {
    let i=0, tempSum = 0, maxSum = 0;
    if (arr.length < n) return 0;
    for (;i<n;i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum;
    for (i=n;i<arr.length;i++) {
        tempSum = tempSum - arr[i-n] + arr[i];
        if (tempSum > maxSum ) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}