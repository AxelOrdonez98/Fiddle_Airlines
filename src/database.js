const mongoose = require('mongoose')

const MONGODB_URL = `mongodb://localhost:27017/Fiddle_Airlines`

mongoose.connect(MONGODB_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
})
    .then(db => console.log('Base de datos conectada!'))
    .catch(err => console.log(err))