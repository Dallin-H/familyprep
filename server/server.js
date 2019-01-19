const express = require('express');
const bodyParser = require('body-parser')
const cr = require('./controller')
const app = express();

app.use(bodyParser.json())

app.get('/api/item', cr.getList)
app.post('/api/item', cr.addItem)
app.put('/api/item/:index', cr.editItem)
app.delete('/api/item/:index', cr.deleteItem)


app.listen(4000, () => console.log(`4000: ...functional running admirably...`))