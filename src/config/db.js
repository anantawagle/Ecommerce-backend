const mongoose="mongodb+srv://ananta:<password>@cluster0.l6nxwsp.mongodb.net/?retryWrites=true&w=majority"

const connectDb=()=>{
    return mongoose.connect(mondbUrl);
}

module.exports={connectDb}