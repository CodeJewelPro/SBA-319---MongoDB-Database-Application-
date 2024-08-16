const React = require('react');
const DefaultLayout = require('../Layout');

class Show extends React.Component {
    render() {
        const { patient } = this.props;
        return (
            <DefaultLayout title="Patient Details">
                <p>Name: {patient.name}</p>
                <p>Age: {patient.age}</p>
                <p>Gender: {patient.gender}</p>
                <p>Medical History: {patient.medicalHistory}</p>
                <a href={`/patients/${patient._id}/edit`}>Edit this Patient</a> 
                <br  />
                <a href="/patients">Back to Patients List</a>
            </DefaultLayout>
        );
    }
}

module.exports = Show;