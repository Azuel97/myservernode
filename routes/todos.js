const express = require('express');
const router = express.Router();
const characters = require('../data/todos')  // --> prendo i dati dal file del db


// GET di tutti i todos all'interno della lista
router.get('/', (req, res, next) => {
    
    let todo = characters.characters
    res.send(todo)
})


// GET di un singolo todo all'interno della lista
// Params --> Passo una variabile id al nostro url tramite ':id' --> es : http://127.0.0.1:2223/api/v1/todos/3
router.get('/:id/', (req, res) => {
    // Converto la stringa passata da req.param.id in un numero
    const id = Number(req.params.id)
    let todo = characters.characters
  
    res.json(todo.filter(todo => todo.id === id))

    console.log('ID : ', id)
})


// Metodi POST, con titolo obbligatorio, non va in conflitto con l'id perhcè è post
router.post('/form', (req, res) => {
    //console.log(req.body)
    const body = req.body
    const {id, titolo, descrizione} = req.body
    const status = {}
    //console.log(id, titolo, descrizione)

    // Controlli sul POST vanno fatti sia lato client che lato server, in questo caso controlliamo che ci 
    // sia il nome all'interno del form in modo che sia obbligatorio, si può fare su più campi
    if(titolo) {
        status.code = 'ok'
        status.message = `Titolo inserito`
    } else {
        status.code = 'error'
        status.message = 'titolo non inserito'
        status.campo = 'titolo'
    }

    res.send(status)
})


// Metodi PUT
router.put('/form/update', (req, res) => {
    
    const status = {}
    status.code = 'ok'
    status.message = `UPDATE`

    res.send(status)
})


// Metodi DELETE
router.delete('/form/delete', (req, res) => {
    
    const status = {}
    status.code = 'ok'
    status.message = `DELETE`

    res.send(status)
})


module.exports = router