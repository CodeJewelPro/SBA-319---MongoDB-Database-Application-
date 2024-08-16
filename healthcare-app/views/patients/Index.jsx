const React = require('react');
const DefaultLayout = require('../Layout.jsx');

class Index extends React.Component {
    render() {
        const { patients } = this.props;
        return (
            <DefaultLayout title="Patients List">
                <h1>All Patients</h1>
                <ul>
                    {patients.map((patient, i) => (
                        <li key={i}>{patient.name} - {patient.age} years old</li>
                    ))}
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = Index;