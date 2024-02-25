import axios from "axios";
import React, { useEffect, useState } from "react";
import '../Styles/search.scss';

const Search = ({ setImageList }) => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    handleSearch();
  }, []);

  const handleSearch = (e) => {
    e && e.preventDefault();      //if event exists then prevent default

    axios.get("https://api.unsplash.com/search/photos", 
      {
        headers: {
          "Accept-Version": "v1",
          Authorization: `Client-ID ${process.env.REACT_APP_UNPLASH_ACCESS_KEY}`,
        },
        params: {
          query: searchQuery || "random",
        },
      })
      .then((response) => {
        console.log("fetched data", response.data);
        setImageList(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="searchWrapper">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          id="searchBox"
          value={searchQuery}
          placeholder="Search anything..."
          onChange={(e) => setSearchQuery(e.target.value)}
          autocomplete="off"
          spellCheck="false"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Search;
