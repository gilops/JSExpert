class Fibonacci{
    * execute(input, current = 0, next = 1){

          if(input === 0){
            //return para parar
            return
          }

        yield current
        //delega a funcao mas nao retorna valor
        yield * this.execute(input -1, next, current + next)
    }
}
module.exports = Fibonacci