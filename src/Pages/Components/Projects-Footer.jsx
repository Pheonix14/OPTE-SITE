import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

const navigate = useNavigate();   
  
const HomeRedirect = () => {
    navigate('/');
  };
  const TeamRedirect = () => {
    navigate('/team');
  };
  
  return (
    <>
<footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-xl-3 col-lg-4 col-md-6">
        <div>
          <h1>Phoenix Open Tech</h1>
          <p className="mb-30 footer-desc">An open-source community creating awesome projects.</p>
        </div>
      </div>
      <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
        <div className="">
          <h4> <i className="bi bi-link-45deg"></i> Quick Link:</h4>
          <ul className="list-unstyled">
            <li>
              <a href="https://discord.com/invite/yPHtuGb3c3" className="text-decoration-none">
                <i className="bi bi-discord"></i> Discord Community</a>
            </li>
            <li>
              <a href="https://github.com/Phoenix-OPTE" className="text-decoration-none">
                <i className="bi bi-github"></i> Github</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none" onClick={HomeRedirect}>
                <i class="bi bi-house-door-fill"></i> Home</a>
            </li>
            <li>
              <a href="#" className="text-decoration-none" onClick={TeamRedirect}>
                <i class="bi bi-people-fill"></i> Team</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
</>
  );
};

export default Footer;