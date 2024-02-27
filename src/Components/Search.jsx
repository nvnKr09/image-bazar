import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/search.scss";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";

const Search = ({ imageList, setImageList }) => {
  // console.log("search Component");
  
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchImage();
  }, []);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  const fetchImage = (flag) => {

    axios.get("https://api.unsplash.com/search/photos", {
        headers: {
          "Accept-Version": "v1",
          Authorization: `Client-ID ${process.env.REACT_APP_UNPLASH_ACCESS_KEY}`,
        },
        params: {
          query: searchQuery || "random",
          per_page: 15,
          page: page,
        },
      })
      .then((response) => {
        // console.log("fetched data", response.data);
        if (flag === "search") {
          setImageList(response.data.results);
        } else {
          setImageList([...imageList, ...response.data.results]);
        }
        setPage(page+1);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchImage("search");
  };

  return (
    <>
    <div className="searchWrapper">
      <form
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="searchBox"
          value={searchQuery}
          placeholder="Search anything..."
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="off"
          spellCheck="false"
        />
        <button type="submit">Search</button>
      </form>
    </div>
      {imageList ? (<ImageGallery imageList={imageList} fetchImage={fetchImage}/>) : (<Loader/>)}
    </>
  );
};

export default Search;
