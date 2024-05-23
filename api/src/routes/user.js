const express = require('express');
import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/registrar/', UserController.register);
router.post('/login/', UserController.login);
router.get('/logout/', UserController.logout);

export default router