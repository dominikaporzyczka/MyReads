import React, { Component } from 'react';
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="open-search">
                    <a>Add a book</a>
                </div>
            </div>
        )
    }
}

export default App;