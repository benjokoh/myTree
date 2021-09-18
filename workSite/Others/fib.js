const fib = (n) => {
    if(n<=2) return 1; //Why?
    return fib(n-1) + fib(n-2); //I think this makes some sence......
};
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(11));
console.log(fib(15));
//console.log(fib(30));
//console.log(fib(50));