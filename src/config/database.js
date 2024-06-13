import mongoose from 'mongoose';

export const connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost/twitter_Dev');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};


