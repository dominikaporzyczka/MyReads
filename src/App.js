import React, { Component } from 'react';
import Book from './Book'

class BooksApp extends Component {
    render() {
        return (
            <div>
                <h1>HELLO! Here will be your bookshelves :)</h1>
                <Book />
            </div>
        )  
    }
}

export default BooksApp;