import User from '../models/User';

exports.register = async function(req, res) {
  try {
    const user = new User(req.body);
    await user.register();

    if(user.errors.length > 0) {
      res.json({erro: user.errors})
      return;
    }

    res.json({cadastro: true});

  } catch(e) {
    console.log(e);
    return res.json({erro: e});
  }
};

exports.login = async function(req, res) {
  try {
    const user = new User(req.body);
    await user.login();

    if(user.errors.length > 0) {
      req.flash('errors', user.errors);
      req.session.save(function() {
        return res.json({erro: true});
      });
      return;
    }

    req.flash('success', 'Você entrou no sistema.');
    req.session.user = user.user;
    req.session.save(function() {
      return res.json(user);
    });
  } catch(e) {
    console.log(e);
    return res.json({erro: true});
  }
};

exports.logout = function(req, res) {
  req.session.destroy();

  res.json({logout: true});
};

