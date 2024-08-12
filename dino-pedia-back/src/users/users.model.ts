import * as mongoose from "mongoose"
export const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'Password must be at least 6 characters long'],
        },
    },
    { timestamps: true }
)

export interface User extends mongoose.Document {
    _id: string;
    username: string;
    password: string;
}