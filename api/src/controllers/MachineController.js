import Machine from '../models/Machine';

exports.cadastrar = async function(req, res) {
    try {
        const maquina = new Machine(req.body);
        await maquina.cadastrar();
    
        if(maquina.errors.length > 0) {
            res.json({erro: maquina.errors})
            return;
        }
    
        res.json({cadastro: true});
    
    } catch(e) {
        console.log(e);
        return res.json({erro: e});
    }
}

exports.listar = async function(req, res) {
    try {
        const maquinas = await Machine.listar();
        res.json(maquinas);
    } catch(e) {
        console.log(e);
        return res.json({erro: e});
    }
}

exports.getId = async function(req, res) {
    try {
        const maquina = await Machine.findById(req.params.id);
        res.json(maquina);
    } catch(e) {
        console.log(e);
        return res.json({erro: e});
    }
}

exports.atualizar = async function(req, res) {
    try {
        const maquina = new Machine(req.body);
        await maquina.atualizar(req.params.id)
    
        if(maquina.errors.length > 0) {
            res.json({erro: maquina.errors})
            return;
        }
    
        res.json({alteracao: true});
    
    } catch(e) {
        console.log(e);
        return res.json({erro: e});
    }
}

exports.deletar = async function(req, res) {
    try {
        const result = await Machine.deletar(req.params.id);
        if (!result) {
            return res.status(404).json({ erro: 'Produto não encontrado.' });
        }
        res.json({ deletado: true });
    } catch (e) {
        console.log(e);
        return res.json({ erro: e.message });
    }
};