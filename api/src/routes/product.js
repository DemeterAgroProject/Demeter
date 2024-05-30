const express = require('express');
import ProductController from '../controllers/ProductController';
import loginRequerido from '../middlewares/loginRequerido';

const router = express.Router();

router.post('/cadastrar/', loginRequerido, ProductController.cadastrar);

router.get('/listar/', ProductController.listar);
router.get('/listar/:id', ProductController.getId);

router.put('/atualizar/:id', loginRequerido, ProductController.atualizar);

router.delete('/deletar/:id', loginRequerido, ProductController.deletar);


export default router

