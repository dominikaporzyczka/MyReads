import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks/>
                )} />
                <Route path="/search" render={() => (
                    <SearchBooks/>
                )}/>
            </div>
        )
    }
}

export default App;