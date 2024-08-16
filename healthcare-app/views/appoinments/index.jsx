const React = require('react');
const DefaultLayout = require('../Layout.jsx');

class Index extends React.Component {
    render() {
        const { appointments } = this.props;
        return (
            <DefaultLayout title="Appointments List">
                <h1>All Appointments</h1>
                <ul>
                    {appointments.map((appointment, i) => (
                        <li key={i}>{appointment.date} with {appointment.doctor} for {appointment.patient}</li>
                    ))}
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = Index;