const express = require('express');
import MachineController from '../controllers/MachineController';

const router = express.Router();

router.get('/listar/', MachineController.listar);

export default router
