const React = require('react');
const DefaultLayout = require('../Layout.jsx');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Add a New Doctor">
                <h1>Add a New Doctor</h1>
                <form action="/doctors" method="POST">
                
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <br />

                    <label htmlFor="specialty">Specialty:</label>
                    <input type="text" id="specialty" name="specialty" required />
                    <br />

                    <input type="submit" value="Add Doctor" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;