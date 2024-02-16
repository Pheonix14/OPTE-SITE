import React from 'react';
import './.././Styles/Projects-Hero.css';

const Hero = () => {
  return (
    <>
<section id="projects" className="projects">
     <h1>Our Projects:</h1>
  <br/>
    <div className="projects-card">
        <img src="https://media.discordapp.net/attachments/1118813310041739314/1208083749925822464/ae7c5d46-7664-4a10-8d9c-e525bb95773f-removebg-preview_1.png?ex=65e1feab&is=65cf89ab&hm=fb959f4875fbacae99772087a64188a2e8ba26d73def5622351a636bf2296ea8&" alt="Logo" className="Logo"/>
        <h2>PyroQuanta</h2>
        <p>PyroQuanta is an AI-based open source discord bot powered by Google's Gemini Pro model.</p>
       <img alt="GitHub Repo stars" className="mx-2" src="https://img.shields.io/github/stars/Phoenix-OPTE/PyroQuanta"/>
       <img alt="GitHub forks" src="https://img.shields.io/github/forks/Phoenix-OPTE/PyroQuanta"/>
      <br/>
        <a className="btn btn-light btn-sm mx-2" href="https://github.com/Phoenix-OPTE/PyroQuanta">
       <i class="bi bi-github"></i> GitHub
        </a>
    </div>
    <div className="projects-card">
        <img src="/favicon-trans.png" alt="Logo" className="Logo"/>
        <h2>Phoenix Open Tech</h2>
        <p>Main website of Phoenix Open Tech</p>
       <img alt="GitHub Repo stars" className="mx-2" src="https://img.shields.io/github/stars/Phoenix-OPTE/OPTE-SITE"/>
       <img alt="GitHub forks" src="https://img.shields.io/github/forks/Phoenix-OPTE/OPTE-SITE"/>
      <br/>
        <a className="btn btn-light btn-sm mx-2" href="https://github.com/Phoenix-OPTE/OPTE-SITE">
       <i class="bi bi-github"></i> GitHub
        </a>
    </div>
    <div className="projects-card">
        <img src="/phoenix-xshare.png" alt="Logo" className="Logo"/>
        <h2>Phoenix XShare</h2>
        <p>Phoenix XShare is a private upload server of Phoenix Share, a web application that allows users to upload and share files easily and securely. It is a fork of the Phoenix Share repository, with some additional features and improvements.</p>
       <img alt="GitHub Repo stars" className="mx-2" src="https://img.shields.io/github/stars/Phoenix-OPTE/Phoenix-XShare"/>
       <img alt="GitHub forks" src="https://img.shields.io/github/forks/Phoenix-OPTE/Phoenix-XShare"/>
      <br/>
        <a className="btn btn-light btn-sm mx-2" href="https://github.com/Phoenix-OPTE/Phoenix-XShare">
       <i class="bi bi-github"></i> GitHub
        </a>
    </div>
    <div className="projects-card">
        <img src="/phoenix-share.png" alt="Logo" className="Logo"/>
        <h2>Phoenix Share</h2>
        <p>Share your files like never before with Phoenix Share. Phoenix Share is an open source file sharing platform that combines the simplicity of Express.js with the speed and security of a phoenix.</p>
       <img alt="GitHub Repo stars" className="mx-2" src="https://img.shields.io/github/stars/Phoenix-OPTE/Phoenix-Share"/>
       <img alt="GitHub forks" src="https://img.shields.io/github/forks/Phoenix-OPTE/Phoenix-Share"/>
      <br/>
        <a className="btn btn-light btn-sm mx-2" href="https://github.com/Phoenix-OPTE/Phoenix-Share">
       <i class="bi bi-github"></i> GitHub
        </a>
    </div>
</section>
    </>
  );
};

export default Hero;