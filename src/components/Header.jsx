import React from "react";

const searchAPI =
  "https://api.themoviedb.org/3/search/movie?api_key=730c60c94829d66ed0f0240656cb8e57&query=";


function Header({ searchTerm, setSearchTerm, setMovies }) {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetch(searchAPI + searchTerm)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };
  return (
    <header className="header">
      <h2>LitMovies</h2>
      <form action="" onSubmit={handleOnSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={searchTerm}
          onChange={handleOnChange}
          placeholder="Search..."
          className="search"
        />
      </form>
    </header>
  );
}

export default Header;
