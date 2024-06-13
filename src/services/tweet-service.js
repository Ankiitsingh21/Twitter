import {TweetRepository,HashtagRepository} from '../repository/index.js'
class TweetService {
        constructor(){
                this.tweetRepository = new TweetRepository();
                this.hashtagRepository = new HashtagRepository();
        }
        async create(data){
                try {
                        const content = data.content;
                        let tags= content.match(/#[a-zA-Z0-9]+/g)
                                        .map((tag)=> tag.substring(1))
                                        .map((tag)=>tag.toLowerCase()); //this regex extractx hashtags from strings

                                        
                        const tweet = await this.tweetRepository.create(data);
                        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
                        let titleOfPresentTags = alreadyPresentTags.map(tags=> tags.title);
                        let hashtags = tags.filter(tags=>!titleOfPresentTags.includes(tags));
                        hashtags = hashtags.map(tag => {
                                return {title: tag ,tweets: [tweet.id]}
                        });
                        await this.hashtagRepository.bulkCreate(hashtags);
                        alreadyPresentTags.forEach((tag)=>{
                                tag.tweets.push(tweet.id);
                                tag.save();
                        })
                        return tweet;
                } catch (error) {
                        console.log(error);
                }
        }
}
export default TweetService;