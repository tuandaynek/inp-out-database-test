const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/tuan_learn', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.error(error);
        process.exit(1);
        console.log('Error connecting to MongoDB');
    }
}

module.exports = {connect};