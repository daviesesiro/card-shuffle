import { useContext, useEffect, useState } from "react";
import { CardContext } from "../context/card-context";

export const SearchInput = () => {
  const { state, dispatch } = useContext(CardContext);

  return (
    <input
      type="search"
      value={state.query}
      placeholder="Search..."
      className="search-input"
      onChange={({ target: { value } }) => {
        dispatch({ type: "onSearchChange", payload: value });
      }}
    />
  );
};
