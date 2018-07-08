import React, { Component } from 'react'
import './App.css'

class SearchBooks extends Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search">Close</a>
                    <input type="text" placeholder="Search by title or author"/>
                </div>
            </div>
        )
    }
}

export default SearchBooks;
