const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
        <html>
            <head>

<title>
    {this.props.title}</title>
    </head>
    <body>

<header>
    <h1>{this.props.title}</h1>
    </header>

    <div>{this.props.children}</div>

    </body>
    
    </html>
        );
    }
}

module.exports = DefaultLayout;