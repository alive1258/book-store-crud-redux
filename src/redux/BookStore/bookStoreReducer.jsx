import { ADD_BOOK, LOADED_BOOK, REMOVE_BOOK, UPDATE_BOOK } from "./actionType";

const initialState = []

const bookStoreReducer = (state = initialState, action) => {
    const copiedState = [...state]
    const { type, payload } = action
}