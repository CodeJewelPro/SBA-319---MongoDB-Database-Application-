import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    yearsOfExperience: { type: Number, required: true }
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;