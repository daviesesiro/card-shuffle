import Header from "./components/Header";
import { CardList } from "./components/CardList";
import { Tag } from "./components/Tag";
import { abilities } from "./utils/random";
import { CardContextProvider } from "./context/card-context";
import { SearchInput } from "./components/SearchInput";
import "./App.css";

const App = () => {
  return (
    <>
      <CardContextProvider>
        <Header />
        <main>
          <div className="top-tools">
            <SearchInput />
            <p className="abilities-head">Abilities</p>
            <div>
              <span />
              <span />
            </div>
            <div className="abilities-body">
              {abilities.map((ability, idx) => (
                <Tag key={idx} {...ability} />
              ))}
            </div>
          </div>
          <CardList />
        </main>
      </CardContextProvider>
    </>
  );
};

export default App;
