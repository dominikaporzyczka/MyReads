import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'
import * as BooksAPI from './BooksAPI'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            assignedBooks: []
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate(book, shelf) {
        const updatedBooks = this.state.assignedBooks
        const element = updatedBooks.find((findingBook) => findingBook.id === book.id)

        if (element) {
            element.shelf = shelf
        }
        else {
            book.shelf = shelf
            updatedBooks.push(book)
        }

        this.setState({ assignedBooks: updatedBooks })
    }


    componentDidMount() {
        BooksAPI.getAll().then((assignedBooks) => {
            this.setState({ assignedBooks })
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <ListBooks
                        assignedBooks={this.state.assignedBooks}
                        handleUpdate={this.handleUpdate}
                    />
                )} />
                <Route path="/search" render={() => (
                    <SearchBooks
                        assignedBooks={this.state.assignedBooks}
                        handleUpdate={this.handleUpdate}
                    />
                )} />
            </div>
        )
    }
}

export default App;