//Fibonacci: o proximo numero da sequencia é sempre a soma dos anteriores
// input: 3
// 0,1,1
// input: 5
// 0,1,1,2,
const {createSandbox} = require('sinon');
const Fibonacci = require('./fibonacci');
const sinon = createSandbox

const fibonacci = new Fibonacci()
;(async () => 
{
    for(const sequencia of fibonacci.execute(5)){
        console.log({ sequencia })
    }
})()