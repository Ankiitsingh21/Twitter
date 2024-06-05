const mongoose = require('mongoose');

const tweetScema = new mongoose.Schema({
        content:{
                type: String,
                required: true,
        },
        userEmail:{
                type: String
        },
        comments:[
                {
                     type: mongoose.Schema.Types.ObjectId,
                     ref:'Comment'
                }
        ]
},{timestamps:true});

tweetScema.virtual('contentWithEmail').get(function process(){
        return `${this.content} \nCreated by: ${this.userEmail}`;
})

//hooks 
tweetScema.pre('save', function(next){
        console.log('Inside a hook');
        this.content = this.content + '....';
        next();
});

const Tweet = mongoose.model('Tweet', tweetScema);
module.exports = Tweet;