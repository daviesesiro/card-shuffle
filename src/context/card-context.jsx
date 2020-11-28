import { createContext, useReducer } from "react";
import { GenerateCard } from "../utils/random";

export const CardContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
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
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CardContext.Provider value={{ state, dispatch }}>
      {children}
    </CardContext.Provider>
  );
};
