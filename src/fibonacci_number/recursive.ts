export const fibonacciRecursive = (n: number): number => {
    if (n < 2){
        return n;
    } else return fibonacciRecursive(n-2)+fibonacciRecursive(n-1);
};
