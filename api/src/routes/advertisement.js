const express = require('express');
import AdvertisementController from '../controllers/AdvertisementController';
import loginRequerido from '../middlewares/loginRequerido';

const router = express.Router();

router.post('/cadastrar/', loginRequerido, AdvertisementController.cadastrar);

router.get('/listar/', AdvertisementController.listar);
router.get('/listar/:id', AdvertisementController.getId);

router.get('/listarProduto/:id', AdvertisementController.getProductByAdvertisementId);

router.put('/atualizar/:id', loginRequerido, AdvertisementController.atualizar);

router.delete('/deletar/:id', loginRequerido, AdvertisementController.deletar);


export default router

