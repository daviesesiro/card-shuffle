import { useContext } from "react";
import { CardContext } from "../context/card-context";

export const Tag = ({ ability }) => {
  let {
    dispatch,
    state: { query },
  } = useContext(CardContext);

  if (query) {
    query = query.toLowerCase();
  }
  return (
    <button
      onClick={() => {
        dispatch({ type: "tagOnClick", payload: ability });
      }}
      className={query === ability.toLowerCase() ? "active" : ""}
    >
      {ability}
    </button>
  );
};
