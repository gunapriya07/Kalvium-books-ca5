import React, { useState, useEffect, useRef } from "react";
import "./Books.css";

// Define the Books component
function Books({ inputFocused }) {
  // Ref for the search input element
  const searchInputRef = useRef(null);

  // State to store the list of books
  const [books, setBooks] = useState([]);
  // State to store the search query
  const [search, setSearch] = useState("");

  // useEffect hook to fetch books data and focus on the search input
  useEffect(() => {
    async function getBooks() {
      try {
        // Fetch books data from the API
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
    // Call the function to fetch books data
    getBooks();
  }, [inputFocused]); // Trigger effect when inputFocused changes

  // Filtered list of books based on the search query
  const filteredBooks = books.filter((book) => {
    if (search === "") {
      return true;
    }
    const title = book.title.toLowerCase();
    return title.includes(search.toLowerCase());
  });

  // Event handler for handling search input changes
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Render the Books component
  return (
    <div>
      <article className="SearchResultsSection" id="booksSection">
        <div className="searchResultsHeader"></div>
        <div className="searchDiv">
          {/* Search input */}
          <input
            ref={searchInputRef}
            className="SearchInput"
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
            style={{ color: "black", background: "white" }}
          ></input>
        </div>
        <div className="mainCardDiv">
          <div className="parentCardDiv">
            {/* Render individual book cards */}
            {filteredBooks.map((book) => (
              <div className="individualCard" key={book.id}>
                <div className="imageDiv">
                  {/* Book image */}
                  <img
                    className="BookImage"
                    src={book.imageLinks.thumbnail}
                    alt={book.title}
                  ></img>
                </div>
                <div className="Credentials">
                  {/* Book title */}
                  <h2 className="bookTitle"> {book.title} </h2>
                  <div className="innerCredentials">
                    {/* Book authors */}
                    <p className="authorName">{book.authors.join(", ")}</p>
                    {/* Book rating */}
                    <p className="Rating">
                     {book.averageRating ? `Rating: ${book.averageRating} ★` : "Rating:"+"NA"}
                    </p>
                    {/* Button indicating book is free */}
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

// Export the Books component
export default Books;
