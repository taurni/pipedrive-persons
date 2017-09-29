import React, { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {

    render() {
        let avatar;
        if(this.props.src !== null && this.props.src !== undefined){
            avatar = <img className={"avatar"+ (this.props.large ? " avatar--large" : "")} src={this.props.src.pictures[128]} alt="pilt"/>
        } else {
            avatar = <div className={"avatar avatar--alternative"+ (this.props.large ? " avatar--large" : "")}>{this.props.avatarText}</div>
        }
        return (
            avatar
        )
    };
}

export default Avatar;