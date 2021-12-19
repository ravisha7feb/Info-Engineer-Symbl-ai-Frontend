import './App.css';
import Result from './result.js' ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4> JSON Parser </h4>
      <Result/>
      <form id="json-form" method="POST" action="/json">
        <label for="id">Enter id: </label>
        <input type="text" placeholder="Enter id.."></input>
        <br></br>
        <label for="name">Enter name: </label>
        <input type="text" placeholder="Enter name.."></input>
        <br></br>
        <input type="submit" name="submit" />
      </form>

      </header>
    </div>
  );
}

export default App;

/*<img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/