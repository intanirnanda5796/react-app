import logo from "./logo.svg";
import "./App.css";

const name = "intan irnanda";
const element = <h1>Hello, {name}</h1>;


function App() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("You clicked submit.");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{element}</p>
        <h1>This web is only for fun</h1>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
