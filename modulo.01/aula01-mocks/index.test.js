const {error} = require("./src/constants")
const File = require("./src/file")
const assert = require('assert')

//IFEE
;(async () => {
    //variaveis criadas nesse bloco so funcionam na sua execucao
    //caso de teste se é vazio
    {
        const filePath = './mock/emprtFile-invalid.csv'
        const expected = new Error(error.FILE_LENGHT_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)
        await assert.rejects(result, expected)
    }
    {
        const filePath = './mock/invalidHeader.csv'
        const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)
        await assert.rejects(result, expected)
    }
    {
        const filePath = './mock/fiveItems-invalid.csv'
        const expected = new Error(error.FILE_LENGHT_ERROR_MESSAGE)
        const result = File.csvToJSON(filePath)
        await assert.rejects(result, expected)
    }
    {
        const filePath = './mock/threeItems-valid.csv'
        /*1,gi,dev,11
2,gi2,dev2,12
3,ma,data,21*/
        const expected = [
            {
                id: 1,
                name: "gi",
                profession: "dev",
                age: 11
            },
            {
                id: 2,
                name: "gi2",
                profession: "dev2",
                age: 12
            },
            {
                id: 3,
                name: "ma",
                profession: "data",
                age: 21
            },
        ]
        const result = await File.csvToJSON(filePath)
        //deepEqual tem que ser examente o que a gente esperou
        assert.deepEqual(result, expected)
    }

}
)()