const React = require('react');
const DefaultLayout = require('../Layout.jsx');

class Index extends React.Component {
    render() {
        const { doctors } = this.props;
        return (
            <DefaultLayout title="Doctors List">
                <h1>All Doctors</h1>
                <ul>
                    {doctors.map((doctor, i) => (
                        <li key={i}>{doctor.name} - {doctor.specialty}</li>
                    ))}
                </ul>
            </DefaultLayout>
        );
    }
}

module.exports = Index;