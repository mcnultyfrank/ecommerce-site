import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const mongooseConnect = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(mongooseConnect.connection.host);
        
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDB