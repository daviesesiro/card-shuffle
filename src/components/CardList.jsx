import { useContext } from "react";
import { CardContext } from "../context/card-context";
import Card from "./Card";

export const CardList = () => {
  const { state } = useContext(CardContext);

  return (
    <section className="card-list">
      {state.query === ""
        ? state.cards.map((card, idx) => {
            return <Card key={idx} {...card} />;
          })
        : state.searchedCards.map((card, idx) => {
            return <Card key={idx} {...card} />;
          })}
    </section>
  );
};
