const userService=require("../services/user-service")
const jwtProvider = require("../config/jwtProvider");
const register=async(req,res)=>{
    try {
        const user=await userService.createUser(req.body);
        const jwt=jwtProvider.generateToken(user._id);

        await cartService.createCart(user);

        return res.status(200).send({jwt,message:"register success"});
        

    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}