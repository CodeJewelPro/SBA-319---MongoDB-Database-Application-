import express from 'express';
const router = express.Router();
import Patient from '../models/patient.mjs';

router.get('/', async (req, res) => {
    try {
        const patients = await Patient.find({});
        res.status(200).json(patients);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id', async (req, res)=>{
    try {
        const patient = await Patient.findById(req.params.id);
        res.status (200).render ('patients/Show', { patient});
    } catch(err) {
        res.status(400).json({ error: err. message});
    }
});

export default router;