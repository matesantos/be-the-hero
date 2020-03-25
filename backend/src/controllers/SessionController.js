const connection = require('../database/connection')

const create = async (resquest, response) =>{
    const { id } = resquest.body

    const ong = await connection('ongs').where('id', id).select('name').first()

    if(!ong)
        return response.status(400).json({ error: 'No found ONG this with thid ID!' })

    return response.json(ong)
}

module.exports = {
    create
}