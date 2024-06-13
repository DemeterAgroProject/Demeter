function loginRequerido(req, res, next) {
    if (!(req.session && req.session.user)) {
        return next();
    } else {
        return res.status(401).json({ erro: 'Usuário está logado.' });
    }
}

module.exports = loginRequerido;