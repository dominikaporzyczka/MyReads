import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import './App.css'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    state = {
        searchResult: []
    }

    updateQuery = (query) => {
        if (query) {
            BooksAPI.search(query).then((books) => {
                if (books.error) {
                    this.setState({ searchResult: [] })
                }
                else {
                    const mapBooks = books.map((book) => {
                        const findBook = this.props.assignedBooks
                            .find((assignedBook) => assignedBook.id === book.id)
                        if (findBook) {
                            book.shelf = findBook.shelf
                        }
                        return book
                    })
                    this.setState({ searchResult: mapBooks || [] })
                }
            })
        }
        else {
            this.setState({ searchResult: [] })
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <input
                        type="text"
                        placeholder="Search by title or author"
                        value={this.state.query}
                        onChange={(event) => (
                            this.updateQuery(event.target.value)
                        )}
                    />
                </div>
                <div className="search-books-results">
                    <Bookshelf
                        books={this.state.searchResult}
                        handleUpdate={this.props.handleUpdate}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks;
