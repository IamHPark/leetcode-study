var climbStairs = function(n) {
    // save the result into array
    const output = []

    // basecase
    output[0] = 0;
    output[1] = 1;
    output[2] = 2;

    // from bottom to top, save result
    let i = 3
    while (i <= n) {
        output[i] = output[i-1] + output[i-2]
        i++;
    }

    return output[n]
};