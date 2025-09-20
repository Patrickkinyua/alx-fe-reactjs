import Search from "./components/Search.jsx";

function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="main-title">
            GitHub User Search
          </h1>
          <p className="subtitle">
            Find and explore GitHub profiles with ease
          </p>
        </header>
        <Search />
      </div>
    </div>
  );
}

export default App;
