import logo from './logo.svg';
import './App.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import { CssBaseline, Typography } from '@mui/material';



function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <header className="App-header" >
        <Typography variant='h5'>
        projecturtle in progress ...
        </Typography>
      </header>
      <body className='Bio' >
        <Bio />
        <SocialFollow/>
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

function SocialFollow () {
  return (
    
    <div className="social-follow">
      <a className="insta"
            href="https://www.instagram.com/kurax2_/"
            target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon/>
      </a>

      <a className="insta"
            href="https://www.instagram.com/kurax2_/"
            target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon/>
      </a>

      <a className="insta"
            href="https://www.instagram.com/kurax2_/"
            target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon/>
      </a>
     
    </div>
    
  );
};

export default App;
