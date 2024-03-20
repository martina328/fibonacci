export const fibonacciLoop = (n: number): number => {
    if (n===0){
        return 0;
    } else {
    let a=0
    let b=1
    for (let i = 1; i<n; ++i){
        const c=a+b;
        a=b;
        b=c;
        }
        return b;
    }
};