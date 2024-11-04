//importar o service
const Service = require("./service");
const assert = require('assert');
const { create } = require("domain");
const BASE_URL_1 = "https://swapi.dev/api/planets/1/"
const BASE_URL_2 = "https://swapi.dev/api/planets/2/"
const BASE_URL_3 = "https://swapi.dev/api/planets/3/"
const { createSandbox } = require('sinon')
const sinon = createSandbox();
const mocks = {
    alderaan: require('./alderaan.json'),
    tatooine: require('./tatooine.json'),
}


//funcao que se autoexecuta
;(async () => {
    {
        //esse vai para a internet, a ideia dos stubs é nao consumir toda vez a API na internet direto
        /*const service = new Service()
        const dados = await service.makeRequest(BASE_URL_3)
        console.log('Dados : ' + JSON.stringify(dados))*/

        const service = new Service()
        const stub = sinon.stub(
            service, 
            service.makeRequest.name
        )
        //quando chamarem a url, ele vai colocar no lugar o nosso json
        stub.withArgs(BASE_URL_1).resolves(mocks.tatooine)
        stub.withArgs(BASE_URL_2).resolves(mocks.alderaan)
        {
          const expected = {
            name: "Tatooine",
            surfaceWater: "5",
            appeardIn: 5
          }  
        }

        const results = await service.getPlanets(BASE_URL_1);
        assert.deepStrictEqual(results, expected)
    }
})()