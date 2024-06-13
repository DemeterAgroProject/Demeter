import Product from '../models/Product';

exports.cadastrar = async function(req, res) {
    try {
        const produto = new Product(req.body);
        await produto.cadastrar();
    
        if(produto.errors.length > 0) {
            res.json({erro: produto.errors})
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
        const produtos = await Product.listar();
        res.json(produtos);
    } catch(e) {
        console.log(e);
        return res.json({erro: e});
    }
}

exports.getId = async function(req, res) {
    try {
        const produto = await Product.findById(req.params.id);
        res.json(produto);
    } catch(e) {
        console.log(e);
        return res.json({erro: e});
    }
}

exports.atualizar = async function(req, res) {
    try {
        const produto = new Product(req.body);
        await produto.atualizar(req.params.id);
    
        if(produto.errors.length > 0) {
            res.json({erro: produto.errors})
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
        const result = await Product.deletar(req.params.id);
        if (!result) {
            return res.status(404).json({ erro: 'Produto não encontrado.' });
        }
        res.json({ deletado: true });
    } catch (e) {
        console.log(e);
        return res.json({ erro: e.message });
    }
};