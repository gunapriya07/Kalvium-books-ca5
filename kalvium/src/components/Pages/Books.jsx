import React, { useState, useEffect, useRef } from "react";
import "./Books.css";

function Books({ inputFocused }) {
  const searchInputRef = useRef(null);

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function getBooks() {
      try {
        const response = await fetch(
          "https://reactnd-books-api.udacity.com/books",
          {
            headers: { Authorization: "whatever-you-want" },
          }
        );
        const data = await response.json();
        setBooks(data.books);
        // Focus on the search input when inputFocused is true
        if (inputFocused) {
          searchInputRef.current.focus();
        }
      } catch (error) {
        console.log(error);
      }
    }
    getBooks();
  }, [inputFocused]); // Trigger effect when inputFocused changes

  const filteredBooks = books.filter((book) => {
    if (search === "") {
      return true;
    }
    const title = book.title.toLowerCase();
    return title.includes(search.toLowerCase());
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <article className="SearchResultsSection" id="booksSection">
        <div className="searchResultsHeader"></div>
        <div className="searchDiv">
          <input
            ref={searchInputRef}
            className="SearchInput"
            type="text"
            placeholder="Find what book you need.....!!"
            value={search}
            onChange={handleSearch}
            style={{ color: "black", background: "white" }}
          ></input>
        </div>
        <div className="mainCardDiv">
          <div className="parentCardDiv">
            {filteredBooks.map((book) => (
              <div className="individualCard" key={book.id}>
                <div className="imageDiv">
                  <img
                    className="BookImage"
                    src={book.imageLinks.thumbnail}
                    alt={book.title}
                  ></img>
                </div>
                <div className="Credentials">
                  <h2 className="bookTitle"> {book.title} </h2>
                  <div className="innerCredentials">
                    <p className="authorName">{book.authors.join(", ")}</p>
                    <p className="Rating">
                     {book.averageRating ? `Rating: ${book.averageRating} ★` : "Rating:"+"NA"}
                    </p>
                    <p className="free"><button className="free-btn">Free</button></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default Books;
