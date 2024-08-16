import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
    doctor: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    appointmentDate: { type: Date, required: true },
    notes: { type: String }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
export default Appointment;