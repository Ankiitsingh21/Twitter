import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike=async (req,res)=>{
        try {
                const response = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
                return res.status(200).json({
                        success: "True",
                        message: "Succesfully created a new LIKE",
                        data : response,
                        err:{}
                })   
        } catch (error) {
                console.log(error);
                return res.status(500).json({
                        success: "false",
                        message:"Cannot craete like",
                        data:{},
                        err:error
                });
        }
}