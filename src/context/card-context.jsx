import { createContext, useReducer } from "react";
import { GenerateCard } from "../utils/random";

export const CardContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "clearQuery":
      return { ...state, query: "" };
    case "changeTheme":
      localStorage.setItem("theme", action.payload);
      document.querySelector("html").setAttribute("class", action.payload);

      return { ...state, theme: action.payload };
    case "onSearchChange":
    case "tagOnClick":
      return {
        ...state,
        query: action.payload,
        searchedCards: state.cards.filter(
          (card) =>
            card.name.toLowerCase().includes(action.payload.toLowerCase()) ||
            card.ability.ability
              .toLowerCase()
              .includes(action.payload.toLowerCase())
        ),
      };
    default:
      return { ...state };
  }
};

const getInitialState = () => {
  const randomNumber = Math.randomFromRange(10, 15);
  const initialState = [];
  for (let i = 0; i < randomNumber; i++) {
    initialState.push(GenerateCard(i));
  }
  return { cards: initialState, searchedCards: [], query: "" };
};

const initialState = getInitialState();

export const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    (initialState) => {
      const theme = localStorage.getItem("theme") || "magenta";
      document.querySelector("html").setAttribute("class", theme);
      return { ...initialState, theme };
    }
  );

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};
