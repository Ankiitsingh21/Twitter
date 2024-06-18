import express from 'express';

import {createTweet,getTweets}  from '../../controller/tweet-controller.js';
import {toggleLike} from '../../controller/like-controller.js';

const router = express.Router();

router.post('/tweets',createTweet);

router.get('/tweets',getTweets);

router.post('/likes/toggle',toggleLike);

export default router;