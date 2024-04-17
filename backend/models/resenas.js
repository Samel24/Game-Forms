import mongoose from "mongoose";

const resenasSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
});

export const Resenas = mongoose.model("Resenas", resenasSchema);
