const express = require('express');
import MachineController from '../controllers/MachineController';
import loginRequerido from '../middlewares/loginRequerido';

const router = express.Router();

router.post('/cadastrar/', loginRequerido, MachineController.cadastrar);

router.get('/listar/', MachineController.listar);
router.get('/listar/:id', MachineController.getId);

router.put('/atualizar/:id', loginRequerido, MachineController.atualizar);

router.delete('/deletar/:id', loginRequerido, MachineController.deletar);


export default router

