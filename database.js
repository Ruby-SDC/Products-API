const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/testdb')
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DB!'))

module.exports = db;