import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    name: String,
    creator: String,
    image: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

export default mongoose.model('postModules', postSchema);