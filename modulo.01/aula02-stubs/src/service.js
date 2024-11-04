class Service{
    async makeRequest(url){

        //aguarda o fetch terminar, e depois que ele terminar, aguarda um json
        //fetch recupera dados de api ou da rede web
        /*const response = await fetch(url)
        const jsonData = await response.json();
        return jsonData;*/
        return (await fetch(url)).json()
    }
    async getPlanets(url){

    }
}
module.exports = Service