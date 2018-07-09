import React, { Component } from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'

class Book extends Component {
    state = {
        value: ''
    }

    componentDidMount() {
        const assignedShelf = this.props.book.shelf ? this.props.book.shelf : 'none'
        this.setState({ value: assignedShelf })
    }

    handleValueChange(value) {
        this.setState({ value })
        BooksAPI.update(this.props.book, value).then(() => {
            if (this.props.handleUpdate) {
                this.props.handleUpdate()
            }
        })
    }

    render() {
        const { book } = this.props
        return (
            <div className="book">
                <div className="book-top">
                    {book.imageLinks && (
                        <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    )}
                    {!book.imageLinks && (
                        <div className="book-cover">No Image</div>
                    )}
                    <div className="book-shelf-changer">
                        <select value={this.state.value} onChange={(event) => this.handleValueChange(event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
            </div>
        )
    }
}

export default Book;