import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import SearchBooks from './SearchBooks';
import Bookshelf from './Bookshelf'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <Bookshelf/>
                        </div>
                        <div className="open-search">
                            <Link
                                to="/search"
                            >Add a book</Link>
                        </div>
                    </div>
                )} />
                <Route path="/search" render={() => (
                    <SearchBooks/>
                )}/>
            </div>
        )
    }
}

export default App;