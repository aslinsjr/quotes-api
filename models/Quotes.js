const mongoose = require('mongoose')
const Quotes = mongoose.model('Quotes', {
  quote: String
})
module.exports = Quotes