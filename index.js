const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/playground', {useNewUrlParser: true,useUnifiedTopology: true})
    .then(()=>console.log('connected to MongoDb Database....'))
    .catch(error=>console.log('could not connect to MongoDb, error is:'+error));