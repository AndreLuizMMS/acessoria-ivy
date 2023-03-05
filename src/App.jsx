import './styles/main.scss';

import logo from './assets/Logo Branca Fundo Rosa.png';
import wppLogo from './assets/wpp-logo.svg';

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
            image={wppLogo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
