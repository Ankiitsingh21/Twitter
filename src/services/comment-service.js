import {CommentRepository,TweetRepository} from "../repository/index.js";
class CommentService{
        constructor(){
                this.commentRepo = new CommentRepository();
                this.tweetRepository = new TweetRepository();
        }

        async create(modelId, modelType, userId,content){
                if(modelType=='Tweet'){
                        var commentable = await this.tweetRepository.get(modelId);
                }
                else if(modelType=='Comment'){
                        var commentable = await this.commentRepo.get(modelId);
                }
                else{
                        throw new ERROR('unknown model type');
                }
                //console.log(co)
                const comment = await this.commentRepo.create({
                        content: content,
                        userId: userId,
                        onModel: modelType,
                        commentable: modelId,
                        comments:[]
                });

                commentable.comments.push(comment);
                await commentable.save();
                return comment;
        }
}

export default CommentService;