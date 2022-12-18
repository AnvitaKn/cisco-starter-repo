/*import logo from './logo.svg';*/
import './App.css';

function Exhibit({ children, heading }) {
  return (
    <div className="exhibit">
      <h1>{heading}</h1>
      {children}
    </div>
  );
}

function App() {
  return (
    <Exhibit heading="My Exhibit">
    <p>Testing Exhibit</p>
    <p>Need to make changes to design</p>
  </Exhibit>
  );
}

function App(){
  return(
    <div className="App">
      <div class="banner">
        <h1 class="banner-title">Site Title</h1>
      </div>

     {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      {/* </header> */}
    </div>
  );
}


export default App;
