const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    // To create a relationship betn contact and user because each user has their 
    // own set of contacts
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('profile', ProfileSchema);