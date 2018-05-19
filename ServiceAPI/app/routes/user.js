const models = require('@B2iAPI/app/setup');

module.exports = (app) => {
    const api = app.B2iAPI.app.api.user;
    app.route('/api/v1/setup')
        .post(api.setup(models.User));

    app.route('/api/v1/users')
        .get(passport.authenticate('jwt',config.session), api.index(models.User, app.get('b2isecret')))
        .put(passport.authenticate('jwt',config.session), api.update(models.User, app.get('b2isecret')));

    app.route('/api/v1/allusers')
        .get(passport.authenticate('jwt',config.session), api.indexall(models.User, app.get('b2isecret')));

    app.route('/api/v1/signup')
        .post(api.signup(models.User));
}
