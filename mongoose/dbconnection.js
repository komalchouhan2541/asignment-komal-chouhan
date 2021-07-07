const mongoose = require('mongoose');
const dbconnection=mongoose.connect(
      'mongodb+srv://komalchouhan:SC9N7KYGiqGi9C29@cluster0.83l9s.mongodb.net/BATCH6-DB?retryWrites=true&w=majority', 
   {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
     useCreateIndex: true
   })



   module.exports=dbconnection;