import Typewriter from 'typewriter-effect';
import './Css/Home.css';
import { Link } from 'react-router-dom';

const CV = 'http://localhost:5173/CV.pdf';

export default function Home () {

  const downloadfile = ( url ) => {

    const filename = url.split( '/' ).pop();
    const aTag = document.createElement( 'a' );
    aTag.href = url;
    aTag.setAttribute( 'download', filename );
    document.body.appendChild( aTag );
    aTag.click();
    aTag.remove();
  };

  return (
    <div className='home-container'>
      <div className='hire'>
        HIRE
      </div>
      <div className='home-left'>
        <div className="home-left-container">
          <h2>I am Vipul</h2>
          <h1><Typewriter
            options={ {
              strings: [ 'Web Developer', 'Front-End Developer' ],
              autoStart: true,
              loop: true,
              pauseFor: 1000,
              delay: 300,
              deleteSpeed:200
            } }
          /></h1>
          <p>I make web pages come alive</p>
          <div className='home-left-btns'>
            <button onClick={ () => downloadfile( CV ) }>Download CV <img src="./Icons/download.svg" alt="" /></button>
            <ul>
              <li><Link to='https://www.linkedin.com/in/vipul-sharma-1a228323a' target='_blank'><img src="./Icons/linkedin.svg" alt="" /></Link></li>
              <li><Link to='https://github.com/Vipul7876' target='_blank'><img src="./Icons/github.svg" alt="" /></Link></li>
              <li><Link to='https://wa.me/7876127982' target='_blank'><img src="./Icons/whatsapp.svg" alt="" /></Link></li>
              <li><Link to='mailto:vipulsharma3001@gmail.com'><img src="./Icons/mail.svg" alt="" /></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='home-right'>
        <div>
        </div>
      </div>
    </div>
  );
}
