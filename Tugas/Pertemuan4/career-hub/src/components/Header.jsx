
import logo from '../assets/logo.png'; // Update with the actual file path

const Header = () => {
  return (
    <header className="header">

      <div className="header-brand">

        <img src={logo} alt="CareerHub" className="logo" />

        <div className="header-title-group">

          <h1>CareerHub</h1>

          <p>Connecting Talent with Opportunities</p>

        </div>

      </div>

      <nav>

        <a href="#">Register</a>

        <a href="#">Login</a>

      </nav>

    </header>
  );
};

export default Header;