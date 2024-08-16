const React = require('react');
const DefaultLayout = require('./Layout.jsx');

class Home extends React.Component {
    render() {
        return (
            <DefaultLayout title="Healthcare App Home">
                <h1>Welcome to the Healthcare App</h1>
                <nav>
                    <ul>
                        <li><a href="/patients/new">Add a New Patient</a></li>
                        <li><a href="/doctors/new">Add a New Doctor</a></li>
                        <li><a href="/appointments/new">Add a New Appointment</a></li>
                        <li><a href="/patients">View All Patients</a></li>
                        <li><a href="/doctors">View All Doctors</a></li>
                        <li><a href="/appointments">View All Appointments</a></li>
                    </ul>
                </nav>
            </DefaultLayout>
        );
    }
}

module.exports = Home;