import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet=async(req,res)=>{
        try {
                //console.log(req.body);
                const response = await tweetService.create(req.body);
                return res.status(201).json({
                        success: "True",
                        message: "Succesfully created a new tweet",
                        data : response,
                        err:{}
                });
        } catch (error) {
                console.log(error);
                return res.status(500).json({
                        success: "false",
                        message: "Not able to creat a new tweet",
                        data: {},
                        err:{error}
                });
        }
}

export const getTweets=async(req,res)=>{
        try {
                const response = await tweetService.getTweets();
                return res.status(201).json({
                        success: "True",
                        message: "Succesfully get all tweet",
                        data : response,
                        err:{}
                });
        } catch (error) {
                console.log(error);
                return res.status(501).json({ 
                        success: "false",
                        message: "Not able to get a  tweet",
                        data: {},
                        err:{error}
                });
        }
}