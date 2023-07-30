import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import News from "./News";

function SearchBar({search, handleChange , handleClick , news}) {
  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for the latest news..."
          value={search}
          onChange={handleChange}
        ></input>
        <BsSearch
          className="search-icon"
          onClick={handleClick}
          size="2.5rem"
        />
      </div>
      <div className="news-container">
        {
          news.map((n)=>{
            return(
              <News image={n.urlToImage} title={n.title} description={n.description} author={n.author} url={n.url} />
            )
          })
        }
      </div>
    </>
  );
}

export default SearchBar;
