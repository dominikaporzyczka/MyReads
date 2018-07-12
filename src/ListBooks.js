import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import './App.css'

function ListBooks(props) {
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <Bookshelf
                            title={"Currently Reading"}
                            books={props.assignedBooks.filter((book) => (
                                book.shelf === "currentlyReading"
                            ))}
                            handleUpdate={props.handleUpdate}
                        />
                        <Bookshelf
                            title={"Want To Read"}
                            books={props.assignedBooks.filter((book) => (
                                book.shelf === "wantToRead"
                            ))}
                            handleUpdate={props.handleUpdate}
                        />
                        <Bookshelf
                            title={"Read"}
                            books={props.assignedBooks.filter((book) => (
                                book.shelf === "read"
                            ))}
                            handleUpdate={props.handleUpdate}
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


export default ListBooks;