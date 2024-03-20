export const fibonacciMemo = (n: number, memo: number[]=[]): number => {
    if (n < 2){
        return n;
    }
    if (memo[n]){
        return memo[n];
    }
    return memo[n]=fibonacciMemo(n-2, memo)+fibonacciMemo(n-1,memo);
};
