import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    blogpost: String,
    title: String,
    author: String,
    published: [{
        _id: false,
        publisher: { type: String},
        year: { type: Number}
    }]
}, {
    versionKey: false
});