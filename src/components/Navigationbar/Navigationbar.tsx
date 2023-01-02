import logo from '../../images/logo-4x.png';
import './Navigation.css';
import { Link } from 'react-router-dom';

export default function Navigationbar() {
  return (
    <div className="header_container">
      <Link to="/">
        <img className="contrax-logo" alt="Contrax logo" src={logo} />
      </Link>
      <a className="enter-btn-container" href="https://beta.contrax.finance/">
        <div className="enter-btn">
          <p className="enter-btn-text">Enter App</p>
        </div>
      </a>
    </div>
  );
}
