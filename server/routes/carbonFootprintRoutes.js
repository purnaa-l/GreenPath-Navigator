import express from 'express';
import { calculateCarbonFootprintController } from '../controller/calculateCarbonFootprintController.js'

const router = express.Router();

// POST route for calculating carbon footprint
router.post('/calculate', calculateCarbonFootprintController);

export default router;
