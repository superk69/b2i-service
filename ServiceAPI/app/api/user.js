const mongoose = require('mongoose');

const api = {};

api.setup = (User) => (req,res) => {
    const admin = new User({
        username: 'admin',
        password: 'admin',
        email: 'admin@google.com',
        name: 'Cherry',
        surname: 'Kradong',
        role: 'admin'
    });

    admin.save(error => {
        if (error) throw error;
        res.json({ seccess: true });
    })
}

api.signup = (User) => (req, res) => {
    if (!req.body.username || !req.body.password) res.json({ success: false, message: 'Please, pass an username and password.' });
    else {
        const user = new User({
            username: req.body.username,
            password: req.body.password
        });
        user.save(error => {
            if (error) return res.status(400).json({ success: false, message: 'Username already exists.' });
            res.json({ success: true, message: 'Account created successfully' });
        });
    }
}

api.index = (User, Token) => (req,res) => {
    if (Token){
        User.findOne({ _id: req.query.user_id }, (error, user) => {
            if(error) res.status(400).json(error);
            res.status(200).json(user);
        })
    } else return res.status(401).send({ success: false, message: 'Unauthorized' });
}

api.indexAll = (User, Token) => (req, res) => {
    if (Token){
        User.find({ role: 'student' }, (error, doc) => {
            if(error) res.status(400).json(error);
            res.status(200).json(doc);
        })
    } else return res.status(401).send({ success: false, message: 'Unauthorized' });
}

api.update = (User, Token) => (req,res) => {
    if (Token){
        User.findOneAndUpdate({ _id: req.query.user_id },{
                username: req.query.username,
                email: req.query.email,
                name: req.query.name,
                surname: req.query.surname,
                schoolname: req.query.schoolname,
                schoolregion: req.query.schoolregion,
                role: req.query.role }, (error, rslt) => {
                if(error) res.status(400).json(error);
                res.status(200).json({ success: true, message; 'Update already'});
            );
        })
    } else return res.status(401).send({ success: false, message: 'Unauthorized' });
module.exports = api;
