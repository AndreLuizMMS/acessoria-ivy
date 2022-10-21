import './styles/main.scss';

import ProfilePic from './assets/Foto para link ivy .png';
import MidiaKitPic from './assets/ivy-pic.png';
import logo from './assets/Logo Branca Fundo Rosa.png';
import twitter from './assets/twitter.jpg';

import LinkButton from './components/link button/LinkButton';

function App() {
  return (
    <div className="main-container">
      <div className="profile-container">
        <div className="profile-pic-container">
          <img className="profile-pic" src={logo} alt="" />
          <h1 className="name">Ivy Moraes </h1>
        </div>
        <div className="link-list-grid">
          <LinkButton
            text="Aninha"
            link="https://wa.me/5511917031212"
            subText=""
            image="https://cdn.static.linkr.bio/thumb/250x250/cover/85/upload/b00d865a-d691-418e-8baf-385e687c5c78.gif"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
