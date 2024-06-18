import express from 'express';

import {createTweet,getTweets,getTweetswithComment}  from '../../controller/tweet-controller.js';
import {toggleLike} from '../../controller/like-controller.js';
import { createComment } from '../../controller/comment-controller.js';
// import {getTweetswithComment} from '../../controller/tweet-controller.js';

const router = express.Router();

router.post('/tweets',createTweet);
router.get('/tweets/:id',getTweetswithComment);
// router.get('/tweets',getTweets);

router.post('/likes/toggle',toggleLike);
router.post('/comments',createComment);

export default router;