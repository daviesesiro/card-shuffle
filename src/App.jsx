import { CardContextProvider } from "./context/card-context";
import Header from "./components/Header";
import { CardList } from "./components/CardList";
import { Tag } from "./components/Tag";
import { abilities } from "./utils/random";
import { SearchInput } from "./components/SearchInput";
import { ThemePicker } from "./components/ThemePicker";
import { ClearButton } from "./components/ClearButton";

import "./App.css";

const App = () => {
  return (
    <>
      <CardContextProvider>
        <Header />
        <main>
          <div className="top-tools">
            <SearchInput />
            <ThemePicker />
            <p className="abilities-head">Abilities</p>
            <div className="abilities-body">
              {abilities.map((ability, idx) => (
                <Tag key={idx} {...ability} />
              ))}
            </div>
            <ClearButton />
          </div>
          <CardList />
        </main>
      </CardContextProvider>
    </>
  );
};

export default App;
