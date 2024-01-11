const User=require()
const bycrypt=require("bycrypt");

const createuser=async(userdata)=>{
    try{
        let{firstName,lastName,email,password}=userData;

        const isUserExist=await User.findOne({email});
        if(isUserExist){
            throw new error("An user already exists with this email:",email);

        }
        password=await bycrypt.hash(password,8);
    } catch(error){

    }
}