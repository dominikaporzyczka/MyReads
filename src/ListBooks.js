import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import './App.css'

class ListBooks extends Component {
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
                            books={this.props.assignedBooks.filter((book) => (
                                book.shelf === "currentlyReading"
                            ))}
                            handleUpdate={this.props.handleUpdate}
                        />
                        <Bookshelf
                            title={"Want To Read"}
                            books={this.props.assignedBooks.filter((book) => (
                                book.shelf === "wantToRead"
                            ))}
                            handleUpdate={this.props.handleUpdate}
                        />
                        <Bookshelf
                            title={"Read"}
                            books={this.props.assignedBooks.filter((book) => (
                                book.shelf === "read"
                            ))}
                            handleUpdate={this.props.handleUpdate}
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