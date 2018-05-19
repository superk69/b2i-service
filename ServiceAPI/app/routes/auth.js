const models = require('@B2iAPI/app/setup');

module.exports = (app) => {
    const api = app.B2iAPI.app.api.auth;
    app.route('/')
        .get((req, res) => res.send('B2i API'));

    app.route('/api/v1/auth')
        .post(api.login(models.User));
}
