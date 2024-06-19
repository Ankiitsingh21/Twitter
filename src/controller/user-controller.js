import UserService from "../services/user-service.js";

const userService = new UserService();

export const signup=async(req,res)=>{
        try {
                const response = await userService.signup(
                       {
                        email: req.body.email,
                        password: req.body.password,
                        name:req.body.name
                       }

                );
                return res.status(200).json({
                        success: "True",
                        message: "Succesfully created a new user",
                        data : response,
                        err:{}
                })   
        } catch (error) {
                console.log(error);
                return res.status(500).json({
                        success: "false",
                        message:"Not able to create a new user",
                        data:{},
                        err:error
                });
        }
}