const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost/twitter_Dev');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = connect;
