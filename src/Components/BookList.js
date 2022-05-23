import React from 'react';
import Display from './Display';


const BookList = (props) => {
    return (
        <div className="show">
            {
                props.books.map((book, index) => {
                    return <Display
                        key = {index}
                        image={book.volumeInfo.imageLinks.thumbnail} 
                        title={ book.volumeInfo.title }
                        author={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        published={book.volumeInfo.publishedDate}
                        
                    />
                })
            }
        
        </div>
    )
}
export default BookList;