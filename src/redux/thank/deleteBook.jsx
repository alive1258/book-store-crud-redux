import { removeBook } from "../BookStore/action";

const deleteBook = (id) => {
    return async (dispatch) => {
        try {
            await fetch(`http://localhost:9000/books/${id}`, {
                method: "DELETE",

            });
            dispatch(removeBook(id))
        }
        catch (err) {
            console.log(err)
        }
    }
};

export default deleteBook;