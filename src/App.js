import logo from './logo.svg';
import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          project turtles in progress ...
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon/>
        </a>
      </header>
    </div>
  );
}

export default App;
