import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import './App.css'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    state = {
        books: []
    }

    updateQuery = (query) => {
        if(query) {
            BooksAPI.search(query).then((books) => {
                if(books.error) {
                    this.setState({ books: [] })
                }
                else {
                    this.setState({ books: books || [] })
                }
            })
        }
        else {
            this.setState({ books: [] })
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
                        books={this.state.books}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks;
