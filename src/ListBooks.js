import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import './App.css'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <Bookshelf
                            title={"Currently Reading"}
                            books={this.state.books.filter((book) => (
                                book.shelf === "currentlyReading"
                            ))}
                        />
                        <Bookshelf
                            title={"Want To Read"}
                            books={this.state.books.filter((book) => (
                                book.shelf === "wantToRead"
                            ))}
                        />
                        <Bookshelf
                            title={"Read"}
                            books={this.state.books.filter((book) => (
                                book.shelf === "read"
                            ))}
                        />
                    </div>
                    <div className="open-search">
                        <Link
                            to="/search"
                        >Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListBooks;