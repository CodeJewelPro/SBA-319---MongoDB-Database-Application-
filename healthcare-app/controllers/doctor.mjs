import express from 'express';
const router = express.Router();
import Doctor from '../models/doctor.mjs';

router.get('/new',(req, res)=> {
    res.render('doctors/New');
});

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
        res.status(200).render('Show',{doctor});
    } catch (err) {
        res.status(400).json({error: err.message});
    }
});
export default router;