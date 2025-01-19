const mongoose = require('mongoose');

async function connect(){
    try{
        await mongoose.connect('mongodb+srv://TuanCodeNNLT:Tuanc06102023@test-database.vcoy8.mongodb.net/?retryWrites=true&w=majority&appName=Test-Database', {
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
