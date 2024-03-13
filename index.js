const express = require('express')
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.json(Api)
})
app.get('/:id', (req, res) => {
  const id = +req.params.id;
  const card = Api.filter(card => card.id === id);
  res.json(card);
}) 
app.listen(process.env.PORT || 3000)
