//Fibonacci: o proximo numero da sequencia é sempre a soma dos anteriores
// input: 3
// 0,1,1
// input: 5
// 0,1,1,2,
const {createSandbox} = require('sinon');
const Fibonacci = require('./fibonacci');
const sinon = createSandbox
const assert = require('assert')

const fibonacci = new Fibonacci()
;(async () => 
{

    const spy = sinon.spy(
        fibonacci,
        fibonacci.execute.name
    )
    //prova real
    //Numero de sequencias 5
    //[0] input = 5, current = 0, next = 1, resultado = 0
    //[1] input = 4, current = 1, next = 1, resultado = 1
    //[2] input = 3, current = 1, next = 2, resultado = 1
    //[3] input = 2, current = 2, next = 3, resultado = 2
    //[4] input = 1, current = 3, next = 5, resultado = 3
    //[5] input = 0 -> PARA
    for(const sequencia of fibonacci.execute(5)){
       // console.log({ sequencia })
       const expectedCallCount = 6;
        assert.strictEqual(spy.ccallCount, expectedCallCount);
    }
})()