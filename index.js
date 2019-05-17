// Importo la libreria express con il require e la metto in una costante
const express = require('express')
const app = express()
const todos = require('./routes/todos')
let port = process.argv[2] || 2223

// Usa globalmente questa funzione di express per il body-parse, OBBLIGATORIO PER IL POST
app.use(express.urlencoded({extended: false}))


// Definisco la radice dei percorsi, middlewear globali su più  metodi https (es: get, post, ecc...) 
//che rispondono con quel determinato path
app.use('/api/v1/todos', todos)


// Risolve il problema del 404 not found, se non viene soddisfatto nessuna root
app.use((req, res) => {
    res.status(404).send("what??? error 404")
});


app.listen(port)
console.log(`Server running at http://127.0.0.1:${port}/`);