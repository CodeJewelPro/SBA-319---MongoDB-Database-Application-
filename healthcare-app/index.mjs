import express from 'express';
import dotenv from 'dotenv';
import './db/conn.mjs';  // MongoDB connect
import patientRoutes from './controllers/patient.mjs';  // Patient routes
import doctorRoutes from './controllers/doctor.mjs';  // Doctor routes
import appointmentRoutes from './controllers/appointment.mjs';  // Appointment routes

dotenv.config();  // environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/patients', patientRoutes);
app.use('/doctors', doctorRoutes);
app.use('/appointments', appointmentRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Healthcare App');
});

// The server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});