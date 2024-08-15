import express from 'express';
const router = express.Router();
import Doctor from '../models/doctor.mjs';

router.get('/', async (req, res) => {
    try {
        const doctors = await Doctor.find({});
        res.status(200).json(doctors);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        res.status(200).render('doctors/Show',{doctor});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});
export default router;