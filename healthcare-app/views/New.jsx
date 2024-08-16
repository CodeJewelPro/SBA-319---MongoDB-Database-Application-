const React = require('react');
const DefaultLayout = require('./Layout');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Add New Patient">
                <form action="/patients" method="POST">
                    Name: <input type="text" name="name" required /><br/>
                    Age: <input type="number" name="age" required /><br/>
                    Gender: 
                    <select name="gender" required>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select><br/>
                    Medical History: <textarea name="medicalHistory"></textarea><br/>
                    <input type="submit" value="Add Patient" />
                </form>
            </DefaultLayout>
        );
    }
}

module.exports = New;