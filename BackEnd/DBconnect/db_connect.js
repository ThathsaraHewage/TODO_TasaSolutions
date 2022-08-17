require('dotenv').config();
const mongoose = require('mongoose');

//make the db connection
const connection = async() => {
    try{
        await mongoose.connect(process.env.DATABASE,{
             useNewUrlParser: true,
             useUnifiedTopology: true,
        });
        console.log('Database Connection is SUCCESS');
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connection;