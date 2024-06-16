import express from'express';
import {connect} from'./config/database.js';
import bodyParser from 'body-parser';
import apiRoutes from './routes/index.js';
const app = express();

import {UserRepository} from './repository/index.js'
import LikeService from './services/like-service.js';
import {TweetRepository} from './repository/index.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',apiRoutes);

app.use(bodyParser.json());
app.listen(3000, async ()=>{
        console.log(`Server Started`);
        await connect();
        console.log(`Mongo db connected`);
         const userRepo = new UserRepository();
        const tweetRepo = new TweetRepository();
        const tweets = await tweetRepo.getAll(0,10);
       //console.log(tweets);
        const user = await userRepo.getAll();
        //console.log(user);
        const likeService = new LikeService();
        await likeService.toggleLike(tweets[0].id, 'Tweet', user[0].id);
            
         
}); 