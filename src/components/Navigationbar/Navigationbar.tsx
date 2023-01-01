import logo from '../../images/logo-4x.png';
import './Navigation.css';
import { Link } from 'react-router-dom';

export default function Navigationbar() {
  return (
    <div className="header_container">
      <Link to="/">
        <img className="contrax_logo img-fluid"  alt="contrax-logo" src={logo} />
      </Link>
      {/* TODO - Re-add link to 'Enter App' once beta is ready */}
      {/* <Link to="/application"> */}
      <div className="enter_button text-center"  style={{color: "White"}}>
          <p><a href="https://beta.contrax.finance">Enter App</a></p>
      </div>
      {/* </Link> */}
    </div>
  );
}
