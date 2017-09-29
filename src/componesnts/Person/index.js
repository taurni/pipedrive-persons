import React, {Component} from 'react';
import './Person.css';
import './Modal.css';
import Avatar from '../Avatar';
import ReactModal from 'react-modal';
import PersonDetails from '../PersonDetails';
import {IconOfficce} from '../Icon';
import {IconClose} from '../Icon/index';

ReactModal.setAppElement('#root');

class Person extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

        this.initials = this.makeInitials();
    }

    handleOpenModal = () => {
        this.setState({showModal: true});
    };

    handleCloseModal = () => {
        this.setState({showModal: false});
    };

    makeInitials = () => {
        function getChar(str) {
            if (str !== null) {
                return str.charAt(0).toUpperCase()
            } else {
                return "";
            }
        }

        return getChar(this.props.first_name) + getChar(this.props.last_name);
    };

    render() {
        return (
            <div className="person" onClick={this.handleOpenModal}>
                <div className="person__data">
                    <p>{this.props.name}</p>
                    {this.props.org_name !== null &&
                        <p className="person__office"><IconOfficce /> {this.props.org_name} </p>
                    }
                </div>
                <Avatar src={this.props.picture_id} avatarText={this.initials}/>

                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Person details"
                    className="modal"
                    overlayClassName="modal__backdrop">
                    <div className="modal__header">
                        <h2 className="modal__title">Person Information</h2>

                        <button className="modal__close-button" onClick={this.handleCloseModal}><IconClose/></button>
                    </div>
                    <div className="modal__content">
                        <PersonDetails {...this.props} initials={this.initials}/>
                    </div>
                    <div className="modal__footer">
                        <button onClick={this.handleCloseModal}>Back</button>
                    </div>
                </ReactModal>
            </div>
        )
    };
}


export default Person;