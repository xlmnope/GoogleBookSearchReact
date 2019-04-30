import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
  searchBooks: function(query) {
    return axios.get(BASEURL + query);
  },
  getBooks: function() {
    console.log("is this working?");
    return axios("/api/books");
   
  },
  saveBook: function(bookData) {
    console.log("saveBook");
    return axios.post("api/books", bookData);
  },
  deleteBook: function(id) {
    return axios.delete("api/books/" + id)
  }
};