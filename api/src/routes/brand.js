const express = require('express');
import BrandController from '../controllers/BrandController';

const router = express.Router();

router.get('/get/:id', BrandController.getId);

export default router
