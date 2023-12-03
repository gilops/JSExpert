const {error} = require("./src/constants")
const File = require("./src/file")
const assert = require('assert')

//IFEE
;(async () => {
    //variaveis criadas nesse bloco so funcionam na sua execucao
    {
        const filePath = './mock/emprtFile-invalid.csv'
        const expected = new Error(error.FILE_LENGHT_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)
        await assert.rejects(result, expected)
    }
    
}
)()