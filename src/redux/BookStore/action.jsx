import { LOADED_BOOK, ADD_BOOK, REMOVE_BOOK, UPDATE_BOOK } from './actionType';


// all book data load 
export const loadedBook = (books) => {
    return {
        type: LOADED_BOOK,
        payload: books
    }
}

//  add book
export const addBook = (bookObj) => {
    return {
        type: ADD_BOOK,
        payload: bookObj
    }
}

// delete book 
export const removeBook = (id) => {
    return {
        type: REMOVE_BOOK,
        payload: id
    }
}

//  update book 
export const updateBook = (bookObj)=>{
    return {
        type: UPDATE_BOOK,
        payload: bookObj
    }
}


