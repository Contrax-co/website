import logo from '../../images/logo-4x.png';
import './Navigation.css';

export default function Navigationbar() {
  return (
    <div className="header_container">
        <img className="contrax_logo img-fluid"  alt="contrax-logo" src={logo} />
      <a href="https://beta.contrax.finance" className="enter_button text-center">
        <p>Enter App</p>
      </a>
    </div>
  );
}