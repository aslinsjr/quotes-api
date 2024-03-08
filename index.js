const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Quotes = require('./models/Quotes')

app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

app.get("/", (req, res) => {
    res.json({ message: "Oi Express!" });
});


mongoose
  .connect(
    'mongodb+srv://aslinsjr:23061990@cluster0.pke4fyg.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))


app.post('/quotes', async (req, res) => {
    const { quote } = req.body
    const quotes = {
      quote
    }
    try {
      await Quotes.create(quotes)
      res.status(201).json({ message: 'Pessoa inserida no sistema com sucesso!' })
    } catch (error) {
      res.status(500).json({ erro: error })
    }
})

app.get('/quotes', async (req, res) => {
    try {
      const quote = await Quotes.find()
      res.status(200).json(quote)
    } catch (error) {
      res.status(500).json({ erro: error })
    }
  })

  