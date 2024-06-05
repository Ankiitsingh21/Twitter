const express = require('express');
const connect = require('./config/database');
const app = express();
const TweetRepository=require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3000, async ()=>{
        console.log(`Server Started`);
        await connect();
        console.log(`Mongo db connected`);
        //const tweet = await Tweet.create({
        //        content :'second tweet',
        //        //userEmail : 'ankitsingh@gmail.com'
        //});
        //const tweets=await Tweet.find({userEmail:'ankitsingh@gmail.com'});
        //const TweetRepo = new TweetRepository();
        //const tweet = await TweetRepo.create({content:'myTweet'});
        //tweet.comments.push({content:'first comment'});
        //await tweet.save();
        ////const tweets = await TweetRepo.get('665d8882151eb4bdfdb11b8a');
        //const tweet= await TweetRepo.create({content:'Fourth Tweet'});
        //const comment = await Comment.create({content:'new Comment'});
        //tweet.comments.push(comment);
        //await tweet.save();
        //const tweet= await TweetRepo.getAll(0,0);
        ////const tweet = await TweetRepo.create({content :'With hooks now'});
        //console.log(tweet[0].contentWithEmail);
}); 