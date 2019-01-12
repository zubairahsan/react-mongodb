const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userShema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }

})


const User = mongoose.model('user', userShema);
module.exports = User;