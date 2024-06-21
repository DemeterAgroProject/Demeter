const express = require('express');
import UserController from '../controllers/UserController';
import loginRequerido from '../middlewares/loginRequerido.js';
import loginDispensado from '../middlewares/loginDispensado';

const router = express.Router();

router.post('/registrar/', loginDispensado, UserController.register);
router.post('/login/', loginDispensado, UserController.login);
router.get('/logout/', loginRequerido, UserController.logout);

export default router