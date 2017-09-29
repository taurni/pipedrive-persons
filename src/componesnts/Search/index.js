import React, { Component } from 'react'
import './search.css';

class Search extends Component {
    render(){
        return(
            <input className="search" type="text" placeholder="Search" />
        )
    }
}

export default Search;