import { useContext } from "react";
import { ReactComponent as CloseIcon } from "../close.svg";
import { CardContext } from "../context/card-context";

export const ClearButton = () => {
  const { state, dispatch } = useContext(CardContext);

  return (
    <CloseIcon
      onClick={() => dispatch({ type: "clearQuery" })}
      className={`close-icon ${state.query && "active"}`}
    />
  );
};
