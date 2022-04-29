import React, {useState} from "react";
import View from "../view/view";
import {Button} from "react-bootstrap";
import './main.css';
import AddDetails from "../add-details/addDetails";


function Main() {
    const [defaultScreen, setScreen] = useState('LISTING');
    const [books, setBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState({});


    const changeScreen = (screen) => {
        setScreen(screen);
    }

    const addBook = (book) => {
        setBooks([
            ...books,
            book
        ]);

        console.log('books', books)
    }

    const removeBook = (book) => {
        console.log('called remove', book);
        const index = books.findIndex(ele => ele.bookCode === book.bookCode);
        if (index > -1) {
            books.splice(index, 1);
            setBooks(books);
        }
    }

    const updateBook = (book) => {
        console.log('update', book);
        const index = books.findIndex(
            ele => ele.bookCode === book.bookCode,
          );
          console.log('b index', index);
          books[index] = book;
          setBooks(books);
    }

    const editBookDetails = (book) => {
        console.log('edit book', book);
        setSelectedBook(book);
        changeScreen('ADDDETAILS');
    }

    if (defaultScreen === 'ADDDETAILS') {
        return (
            <div className="mt-4">
                <AddDetails screenState={changeScreen} 
                addBook={Object.keys(selectedBook).length ? updateBook : addBook}
                    bookDetails={selectedBook}
                />
            </div>
        );
    }

    if(defaultScreen === 'LISTING') {
        return (
            <div className="library mt-4"> 
                <Button variant="primary" 
                onClick={() => {changeScreen('ADDDETAILS'); setSelectedBook({})}}
                className="d-flex ms-auto me-3">Add</Button>
                
                <div className="mt-3">
                    <View books={books} onDelete={(book) => removeBook(book)}
                        onEdit={(book) => editBookDetails(book)}
                    />
                </div>
            </div>
        )
    } 
}

export default Main;