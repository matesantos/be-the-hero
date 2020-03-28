const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG',() => {

   beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
   })

   afterAll(()=>{
       connection.destroy()
    })

    it('shoud be able create a new ONG',async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD2",
                email: "mateus@contato.com",
                whatsapp: "5583665847",
                city: "joão pessoa",
                uf: "PB"
            })
            expect(response.body).toHaveProperty('id')
            expect(response.body.id).toHaveLength(8)
    })
})