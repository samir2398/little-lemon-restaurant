import { useNavigate } from "react-router";
import logo from "../../assets/little-lemon-logo.jpg";

function Nav() {

  const navigate = useNavigate()

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white d-flex justify-content-center align-items-center rounded-pill gap-5" style={{width:'1114px', height:'70px'}}>
        <img
          style={{ width: "226px", height: "44px" , objectFit:'contain'}}
          src={logo}
          alt="logo little-lemon"
        />
        <ul className="navbar-nav d-flex justify-content-between align-items-center " style={{gap:'50px'}}>
          <li className="nav-item">
            <a className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Reservations</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Order Online</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{cursor:'pointer'}} onClick={(e) => {
              e.preventDefault()
              navigate('/form/login')
            }}>Login</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
