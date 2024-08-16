const React = require('react');
const DefaultLayout = require('../Layout.jsx');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Add a New Appointment">
                <h1>Add a New Appointment</h1>
                <form action="/appointments" method="POST">
                    <label htmlFor="date">Date:</label>
                    <input type="date" id="date" name="date" required />
                    <br />

                    <label htmlFor="doctor">Doctor:</label>
                    <input type="text" id="doctor" name="doctor" required />
                    <br />

                    <label htmlFor="patient">Patient:</label>
                    <input type="text" id="patient" name="patient" required />
                    <br />

                    <input type="submit" value="Add Appointment" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;