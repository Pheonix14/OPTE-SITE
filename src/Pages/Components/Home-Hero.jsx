import React from 'react';
import { useNavigate } from 'react-router-dom';
import './.././Styles/Home-Hero.css';

const Hero = () => {

const navigate = useNavigate();

  const ProjectRedirect = () => {
    navigate('/projects');
  };
  
  return (
    <>
<section className="hero">
    <img src="/favicon-trans.png" alt="Logo" className="Logo"/>
    <h1>Welcome to</h1>
    <h1>Phoenix Open Tech</h1>
    <p>An open-source community creating awesome projects</p>
    <button className="btn btn-primary btn-sm mx-2" onClick={ProjectRedirect}>
        <i class="bi bi-file-earmark-code-fill"></i> Projects
    </button>
    <a className="btn btn-info btn-sm" href="https://discord.com/invite/yPHtuGb3c3">
        <i class="bi bi-discord"></i> Join Discord
    </a>
  <br/>
  <br/>
   <a className="btn btn-light btn-sm" href="https://phoenixopentech.blogspot.com/">
        <i class="bi bi-newspaper"></i> Blogspot
    </a>
  <br/>
  <br/>
  <br/>
  <h2>About Us:</h2>
  <p>Phoenix Open Tech is a non-profit community that builds fun and useful open source projects. Our goal is to make developers more productive and contribute to the internet. Let’s make the web more open. #PhoenixOpenTech</p>
  <br/>
  <br/>
  <h2>Be A Contributor:</h2>
      <div className="github-repo">
      <a href="https://github.com/Phoenix-OPTE">
     <i className="bi bi-github"></i> Github Organization</a>
      </div>
  <img className="mx-2" alt="GitHub followers" src="https://img.shields.io/github/followers/Phoenix-OPTE"/>
  <img alt="GitHub Org's stars" src="https://img.shields.io/github/stars/Phoenix-OPTE"/>
  <br/>
  <br/>
  <br/>
  <h2>Discord Community:</h2>
  <br/>
  <iframe src="https://discord.com/widget?id=1118802362136547328&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
</section>
</>
  );
};

export default Hero;