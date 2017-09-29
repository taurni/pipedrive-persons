import React, { Component } from 'react';
import './App.css';
import PersonList from '../PersonList';
import Search from '../Search';
import { IconPipedrive } from '../Icon';

class App extends Component {

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
                    <Search />
                </div>
                <div className="app__content app__content--separator">
                    <PersonList icon="PIPEDRIVE"/>
                </div>
            </div>
        );
    }
}

export default App;
