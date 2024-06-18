import { TweetRepository, HashtagRepository } from '../repository/index.js';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        try {
            const content = data.content;
            let tags = content.match(/#[a-zA-Z0-9]+/g);
            if (tags) {
                tags = tags.map((tag) => tag.substring(1)).map((tag) => tag.toLowerCase());
            } else {
                tags = [];
            }

            const tweet = await this.tweetRepository.create(data);
            let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
            let titleOfPresentTags = alreadyPresentTags.map(tag => tag.title);
            let hashtags = tags.filter(tag => !titleOfPresentTags.includes(tag));

            hashtags = hashtags.map(tag => {
                return { title: tag, tweets: [tweet.id] };
            });

            await this.hashtagRepository.bulkCreate(hashtags);

            alreadyPresentTags.forEach((tag) => {
                tag.tweets.push(tweet.id);
                tag.save();
            });

            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getTweets(){
        try {
            const tweet = await this.tweetRepository.getAll();
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default TweetService;
