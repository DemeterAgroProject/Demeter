import Advertisement from '../models/Advertisement';
import Machine from '../models/Machine';

exports.cadastrar = async function(req, res) {
    try {
        const anuncio = new Advertisement(req.body);
        await anuncio.cadastrar();
    
        if(anuncio.errors.length > 0) {
            res.json({erro: anuncio.errors})
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
        const anuncios = await Advertisement.listar();
        res.json(anuncios);
    } catch(e) {
        console.log(e);
        return res.json({erro: e});
    }
}

exports.getId = async function(req, res) {
    try {
        const anuncio = await Advertisement.findById(req.params.id);
        res.json(anuncio);
    } catch(e) {
        console.log(e);
        return res.json({erro: e});
    }
}

exports.getProductByAdvertisementId = async function(req, res) {
    try {
        const anuncio = await Advertisement.findById(req.params.id);
        const maquina = await Machine.findById(anuncio.productId);
        res.json(maquina);
    } catch(e) {
        console.log(e);
        return res.json({erro: e});
    }

}

exports.atualizar = async function(req, res) {
    try {
        const anuncio = new Advertisement(req.body);
        await anuncio.atualizar(req.params.id);
    
        if(anuncio.errors.length > 0) {
            res.json({erro: anuncio.errors})
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
        const result = await Advertisement.deletar(req.params.id);
        if (!result) {
            return res.status(404).json({ erro: 'Produto não encontrado.' });
        }
        res.json({ deletado: true });
    } catch (e) {
        console.log(e);
        return res.json({ erro: e.message });
    }
};