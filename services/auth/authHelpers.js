const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRequired(req, res, next) {
  if (!req.user) {
    req.session.returnTo = req.path;
    return res.redirect('/auth/login');
  }
  
  return next();
}

module.exports = {
  comparePass,
  loginRequired,
};