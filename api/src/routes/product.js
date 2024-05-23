const express = require('express');
import ProductController from '../controllers/ProductController';

const router = express.Router();

router.post('/cadastrar/', ProductController.cadastrar);

router.get('/listar/', ProductController.listar);
router.get('/listar/:id', ProductController.getId);

router.put('/atualizar/:id', ProductController.atualizar);

// router.delete('/deletar/:id', ProductController.deletar);


export default router

