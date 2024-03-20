export const fibonacciDp = (n: number): number => {
    let cache = {};
    return function fibonacciDp(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n < 2) {
                return n;
            } else {
                cache[n] = fibonacciDp(n-1) + fibonacciDp(n-2);
                return cache[n];
            }
        }
    }
};
