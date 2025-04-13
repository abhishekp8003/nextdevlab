'use client'
import { useEffect, useRef } from "react";

const HeaderSearch = ({ toggleSearch, isOpen }) => {
  const inputRef = useRef(null);

  // useEffect(() => {
  //   // Autofocus input when search is opened
  //   if (isOpen && inputRef.current) {
  //     inputRef.current.focus();
  //   }

  //   // Close search on Escape key
  //   const handleKeyDown = (event) => {
  //     if (event.key === "Escape") {
  //       toggleSearch();
  //     }

  //     // Detect Ctrl + F to open the search bar
  //     if (event.ctrlKey && event.key === "f") {
  //       event.preventDefault(); // Prevent default browser search
  //       toggleSearch();
  //     }
  //   };

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [isOpen, toggleSearch]);

  return (
    <div className={`axil-search-area ${isOpen ? "open" : "hidden"}`}>
      <form action="#" className="axil-searchbar w-100">
        <div className="search-field">
          <input ref={inputRef} type="text" placeholder="Search Here..." />
          <button className="navbar-search-btn" type="button">
            <i className="fal fa-search"></i>
          </button>
        </div>
        <button className="navbar-search-close"
          // onClick={toggleSearch}
        
        >
          <i className="fal fa-times" />
        </button>
      </form>
    </div>
  );
};

export default HeaderSearch;
