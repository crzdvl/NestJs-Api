import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    isAdmin: Boolean,
    verified: Boolean
}, {
    versionKey: false
});