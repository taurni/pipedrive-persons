import React, { Component } from 'react';
import './App.css';
import PersonList from '../PersonList';
import Search from '../Search';
import { IconPipedrive } from '../Icon';
import { getPersons, findPersons } from '../utils/apiConnection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            search: ""
        };

        this.fetchPersons();
    }

    fetchPersons = () => {
        getPersons()
            .then((persons) => {
            this.setState({ persons });
            this.forceUpdate();
        })
            .catch((err) => console.log(err));
    };

    searchPerson = (person) => {
        if(person !== "" && person.length > 1) {
            findPersons(person)
                .then((persons) => {
                    this.setState({persons});
                })
                .catch((err) => {
                    this.setState({persons: []});
                    console.error(err);
                });
        }else{
            this.fetchPersons();
        }
    };

    render() {
        return (
            <div className="app">
                <div className="app__header">
                    <div className="app__content">
                        <IconPipedrive />
                    </div>
                </div>
                <div className="app__content app__content--header">
                    <h1 className="app__page-title">People's List</h1>
                    <Search updateText={(search) => this.searchPerson( search )}/>
                </div>
                <div className="app__content app__content--separator">
                    <PersonList persons={this.state.persons} />
                </div>
            </div>
        );
    }
}

export default App;
