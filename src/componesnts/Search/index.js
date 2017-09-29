import React, { Component } from 'react'
import './search.css';

class Search extends Component {
    constructor(props){
        super(props);

        this.timeout = null;
    }

    debounce = (searchString) => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
                this.props.updateText(searchString)
        }, 200);
    };

    render(){
        return(
            <input className="search" type="text" placeholder="Search" onChange={(e) => {this.debounce(e.target.value) }} />
        )
    }
}

export default Search;