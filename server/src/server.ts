import express from 'express'

const app = express()

app.get('/users', (request, response) => {
    const users = [
        { name: 'Kleiton', age: 25},
        { name: 'Vini', age: 21},
    ]

    return response.json(users)
})

app.listen(3333)