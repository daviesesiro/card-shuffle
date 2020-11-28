import { useContext, useEffect } from "react";
import { CardContext } from "../context/card-context";

export const ThemePicker = () => {
  const themes = ["blue", "magenta", "green", "yellow"];
  const { state, dispatch } = useContext(CardContext);

  const changeTheme = (theme) => {
    dispatch({
      type: "changeTheme",
      payload: theme,
    });
  };

  useEffect(() => {
    const idx = setInterval(() => {
      changeTheme(themes[Math.randomFromRange(0, themes.length)]);
    }, 5000);
    return () => clearInterval(idx);
  }, [state.theme]);

  return (
    <div className="theme-picker">
      {themes.map((name, idx) => (
        <Theme
          changeTheme={changeTheme}
          theme={state.theme}
          key={idx}
          name={name}
        />
      ))}
    </div>
  );
};

const Theme = ({ name, theme, changeTheme }) => {
  return (
    <span
      onClick={() => changeTheme(name)}
      className={`${name} ${theme === name ? "active" : ""}`}
    />
  );
};
