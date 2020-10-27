const express = require('express');
const bc = require('./controllers/books_controller')

const app = express();

app.use(express.json());

//put endpoints here

app.get('/api/books', bc.read);

app.post('/api/books', bc.create);

app.put('/api/books/:id', bc.update);

app.delete('/api/books/:id', bc.delete);

const port = 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`))