import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktailHandler = () => {
    setSearchTerm(searchValue.current.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={formSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favourtie cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktailHandler}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
