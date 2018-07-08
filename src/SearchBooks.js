import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

class SearchBooks extends Component {
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <input type="text" placeholder="Search by title or author"/>
                </div>
            </div>
        )
    }
}

export default SearchBooks;
