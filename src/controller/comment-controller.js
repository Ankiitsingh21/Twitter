import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment=async(req,res)=>{
        try {
                //console.log(req.body);
                const response = await commentService.create(req.query.modelId, req.query.modelType, req.body.userId,req.body.content);
                return res.status(201).json({
                        success: "True",
                        message: "Succesfully created a new comment",
                        data : response,
                        err:{}
                });
        } catch (error) {
                console.log(error);
                return res.status(500).json({
                        success: "false",
                        message: "Not able to creat a new comment",
                        data: {},
                        err:{error}
                });
        }
}