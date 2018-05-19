const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    projectsetup: {
        name: {
            type: String,
            required: true
        },
        detail: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    },
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    phasedata: [
        {
            phase: {
                type: String,
                required: true
            },
            upload: [
                {
                    path: {
                        type: String
                    },
                    type: {
                        type: String
                    }
                }
            ],
            result: {
                type: String
            }
        }
    ],
    log : {
        logdetail: {
            type: String
        },
        logtype: {
            type: String
        },
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        createAt: {
            type: Date
        }
    },
    createAt: {
        type: Date
    },
    updateAt: {
        type: Date
    }
});

mongoose.model('Project', Schema);
