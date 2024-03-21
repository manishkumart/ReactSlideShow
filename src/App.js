import logo from './logo.svg';
import sparrow_logo from './Components/Images/sparrow_icon.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sparrow_logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
