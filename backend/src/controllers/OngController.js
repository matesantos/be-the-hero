const connection = require('../database/connection')
const geranteUniqueId = require('../utils/generateUniqueId')

const create = async (request, response) =>{
    const { name, email, whatsapp, city, uf } = request.body

    const id = geranteUniqueId()

    await connection('ongs').insert({
        id, name, email, whatsapp, city, uf
    })

    return response.json({ id })
}

const index = async (request, response) =>{
    const ongs = await connection('ongs').select('*')

    return response.json(ongs)
}

module.exports = {
    create,
    index    
}