import express from 'express';
const router = express.Router();
import Appointment from '../models/appointment.mjs';

router.get('/', async (req, res) => {
    try {
        const appointments = await Appointment.find({})
            .populate('patient')
            .populate('doctor');
        res.status(200).json(appointments);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/:id',async (req,res)=> {
    try {
        const appointment = await Appointment.findById(req.params.id)
        .populate('patient')
        .populate('doctor');
        res.status(200).render('appointments/Show', {appointment});
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
});
export default router;