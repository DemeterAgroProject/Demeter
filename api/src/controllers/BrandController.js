import Brand from '../models/Brand';

exports.getId = async function(req, res) {
    try {
        const brand = await Brand.findById(req.params.id);
        res.json(brand);
    } catch(e) {
        console.log(e);
        return res.json({erro: e});
    }
}