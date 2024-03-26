//importar o service
const Service = require("./service");
const assert = require('assert')
const BASE_URL_1 = "https://swapi.dev/api/planets/1/"
const BASE_URL_2 = "https://swapi.dev/api/planets/2/"
const BASE_URL_3 = "https://swapi.dev/api/planets/3/"

;(async () => {
    {
        const service = new Service()
        const dados = await service.makeRequest(BASE_URL_1)
        console.log('Dados : ' + dados)
    }
})()