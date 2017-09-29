import React, { Component } from 'react';
import './ContactField.css';

class ContactField extends Component {

    render() {
        return (
            <tr className="contact-field">
                <td>{this.props.label}</td>
                <td>{this.props.value}</td>
            </tr>
        );
    };
}

export default ContactField;
// export default PersonDetails;