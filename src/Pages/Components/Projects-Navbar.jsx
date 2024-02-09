import React from 'react';
import { useNavigate } from 'react-router-dom';
import './.././Styles/Navbar.css';

const Navbar = () => {

const navigate = useNavigate();

  const TeamRedirect = () => {
    navigate('/team');
  };
  const HomeRedirect = () => {
    navigate('/');
  };
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
  <img src="../public/favicon-trans.png" alt="" width="40" height="30" className="d-inline-block align-text-top" />
  Phoenix Open Tech
</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#" onClick={TeamRedirect}> <i class="bi bi-people-fill"></i> Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={HomeRedirect}> <i class="bi bi-house-door-fill"></i> Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> <i class="bi bi-github"></i> GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"> <i class="bi bi-discord"></i> Discord</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
    );
};

export default Navbar;