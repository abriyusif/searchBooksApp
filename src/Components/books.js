import React, {Component} from 'react';
import Search from './Search';
import BookList from './BookList';
import request from 'superagent';

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchFields: '',
            }        
    }

    searchBook = (event) => {
        event.preventDefault();
        request
            .get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchFields + '&key=AIzaSyDz5gJL-0a9aWtl7o88xiCCfQunMRzm1OY')
            .query({ q: this.searchFields })
            .then((data) => {
            this.setState({books: [...data.body.items]})
        })
    }
    
    handleSearch = (event) => {
        this.setState({searchFields: event.target.value});
    }
    render() {
        return (
            <div>
                <Search searchBook = {this.searchBook} handleSearch={this.handleSearch}/>
                <BookList books ={this.state.books}/>
            </div>
        )
    }
}
export default Books;