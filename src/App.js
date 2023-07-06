import logo from './logo.svg';
import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import { CssBaseline, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
        projecturtle in progress ...
        </p>
         
       
        
        
      </header>

      <Bio/>
      <Socials/>
      
    </div>
  );
}

function Bio(){
  return(
    <>
      <CssBaseline/>
      <Typography variant='body1'>hi, Kura here </Typography>
      <Typography variant='body1'>i'm currently learning </Typography>
      <img src={logo} className="App-logo" alt="logo"/>
    </>
  )
}

function Socials(){
  return(
    <>
      <CssBaseline/>
        <div>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon/>
        </a>
        </div>
        
    </>
  
  )
}

export default App;
