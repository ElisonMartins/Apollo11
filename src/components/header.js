import './header.css';
import Logo from ".././midia/images/logo.svg";

function Header() {
  return (
    <>
    <header>
        <div className="headerIni">
            <img src={Logo} className="logo"/>
            <p>Nasa - Missao Apollo 11</p>
        </div>
        <div className="info">
            <p>Objetivo</p>
            <p>Detalhes</p>
        </div>
    </header>
    </>
    
  );
}

export default Header;