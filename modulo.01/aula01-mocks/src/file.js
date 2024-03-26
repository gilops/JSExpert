//ler um arquivo no js
const { readFile } = require('fs/promises')
const { error } = require('./constants')
const DEFAULT_OPTIONS = {
    maxLines: 3,
    fields: ['id', 'name', 'profession', 'age']
}
class File{
    static async csvToJSON(filePath){
        const content = await readFile(filePath, "utf8")
        const validation = this.isValid(content)
        if(!validation.valid) throw new Error(validation.error)
        const result = this.parseCSVToJSON(content)
        return result
       }

    static isValid(csvString, options = DEFAULT_OPTIONS){
        //[0] headers
        //[1] linha 1
        //[2] linha 2
        //...variavel = é o restante do arquivo caso o arquivo tenha muitas linhas
       const [header, ...fileWithoutHeader]= csvString.split(/\r?\n/)
       const isHeaderValid = header === options.fields.join(',')
      // console.log('FILE CONTEUDO ' + fileWithoutHeader.length + ' valor linhas ' + options.maxLines)
      
       if(!isHeaderValid){
       return{
            error: error.FILE_FIELDS_ERROR_MESSAGE,
            valid: false
        }
       }
       if (!fileWithoutHeader.length || fileWithoutHeader.length > options.maxLines){
        return{
            error: error.FILE_LENGHT_ERROR_MESSAGE, 
            valid: false
        }
       }
       //vai retornar true e vai pra proxima funcao
       return { valid: true}

    }

    static parseCSVToJSON(csvString){
        const lines = csvString.split(/\r?\n/)
        //remover a primeira linha
        const firstLine = lines.shift()
        const header = firstLine.split(',')

        const users = lines.map(line => 
            {
                const columns = line.split(',')
                const user = {}
                for (const index in columns){
                    //esse é um de x para
                    user[header[index]] = columns[index].trim()
                }
                return user
            })
            return users
    }
}

module.exports = File
