import logo from './logo.svg';
import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import { CssBaseline, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <header className="App-header">
        <Typography variant='h5'>
        projecturtle in progress ...
        </Typography>
      </header>
      <body className='Bio'>
        <Bio/>
      </body>
      <body className='Soc'>
        <Socials/>
      </body>
      
    </div>
  );
}

function Bio(){
  return(
    <>
      <Typography variant='body1' align='center'>hi, Kura here </Typography>
      <Typography variant='body1' align='center'>i'm currently learning </Typography>
      <img src={logo} className="App-logo" alt="logo" />
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
