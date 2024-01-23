const mongoose="mongodb+srv://ananta:Ananta@123@cluster0.l6nxwsp.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}