export const fibonacciRecursive = (n: number): number => {
    if (n===0){
        return 0;
    }
    if (n===1){
        return 1;
    }
    return fibonacciRecursive(n-2)+fibonacciRecursive(n-1);
};
