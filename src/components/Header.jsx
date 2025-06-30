import logo from "../images/logo-hp.png";

function Header() {
  return (
    <header className="header-logo">
      <img className="logo-img" src={logo} alt="harry-potter-logo" />
    </header>
  );
}

export default Header;