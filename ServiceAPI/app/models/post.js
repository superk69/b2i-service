const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    upload: [
        {
            uploadtype: {
                type: String
            },
            namefile: {
                type: String,
                required: true
            },
            path: {
                type: String,
                required: true
            }
        }
    ],
    comment: [
        {
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            details: {
                type: String
            },
            createAt: {
                type: Date
            }
        }
    ],
    title: {
        type: String,
        required: true
    },
    details: {
        type: String
    },
    type: {
        type: String
    },
    createAt: {
        type: Date
    }
});

mongoose.model('Post',Schema);
