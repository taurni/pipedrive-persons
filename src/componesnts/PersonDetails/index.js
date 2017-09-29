import React, { Component } from 'react';
import Avatar from '../Avatar/index';
import ContactField from '../ContactField';
import { CUSTOMFIELDS } from '../../constants';
import './PersonDetails.css';

class PersonDetails extends Component {

    render (){
        return(
            <div className="person-details">
                <div className="person-details__header">
                    <Avatar large={true} avatarText={this.props.initials} src={this.props.picture_id}/>
                    <p className="person__name"><strong>{this.props.name}</strong></p>
                    <p className="person__phone">{this.props.phone[0].value}</p>
                </div>
                <div className="person-details__main">
                    <table>
                        <ContactField label="Email" value={this.props.email[0].value} />
                        <ContactField label="Organization" value={this.props.org_name} />
                        <ContactField label="Assistant" value={this.props[CUSTOMFIELDS.ASSISTANT].name} />
                        <ContactField label="Groups" value={this.props[CUSTOMFIELDS.GROUPS]} />
                        <ContactField label="Location" value={this.props[CUSTOMFIELDS.LOCATION]} />
                    </table>
                </div>
            </div>
        );
    };

}

export default PersonDetails;