const User=require()
const bcrypt=require("bcrypt");

const createUser=async(userData)=>{
    try{
        let{firstName,lastName,email,password}=userData;

        const isUserExist=await User.findOne({email});
        if(isUserExist){
            throw new error("An user already exists with this email:",email);

        }
        password=await bcrypt.hash(password,8);
    
        const user=await User.create

    } catch(error){

    }
}