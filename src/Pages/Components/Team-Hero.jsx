import React from 'react';
import './.././Styles/Team-Hero.css';

const Hero = () => {
  return (
    <>
<section id="team" className="team">
     <h1>Our Team:</h1>
  <br/>
    <div className="team-card">
        <img src="https://media.discordapp.net/attachments/1118813310041739314/1208090618790674472/downloadfile-1.jpg?ex=65e20510&is=65cf9010&hm=6e16a2dbd85cadc2069facfb8e14e6323600e4988ba080f3a2a32bd8346f6cee&" alt="Pfp" className="Pfp"/>
        <h2>Pheonix</h2>
        <h5>Role: Founder & Project Manager</h5> <br/>
         <h6>About Me:</h6> <p>I'm Pheonix, a Kolkata-based fullstack web developer. Passionate about coding and occasional gaming. Let's connect for insightful discussions and collaborations.</p>
      <br/>
        <a className="btn btn-primary btn-sm mx-2" href="https://discord.com/users/674145228063768587">
       <i class="bi bi-discord"></i> Discord
        </a>
        <a className="btn btn-light btn-sm mx-2" href="https://github.com/Pheonix14">
       <i class="bi bi-github"></i> GitHub
        </a>
    </div>
    <div className="team-card">
        <img src="https://media.discordapp.net/attachments/1118813310041739314/1205466428061384724/IMG-20240209-WA0003.jpg?ex=65d87918&is=65c60418&hm=9ae71b53d939c19b14399eed96fb65d1a65e6aea73103bc843aa205f95e6ce4d&" alt="Pfp" className="Pfp"/>
        <h2>Xapaui</h2>
        <h5>Role: Community Manager & Bug Hunter</h5> <br/>
         <h6>About Me:</h6> 
      <p>Meet xapaui, a mobile gaming enthusiast from Odisha, always chasing victory in virtual worlds!</p>
      <br/>
        <a className="btn btn-primary btn-sm mx-2" href="https://discord.com/users/756508455837237358">
       <i class="bi bi-discord"></i> Discord
        </a>
        <a className="btn btn-light btn-sm mx-2" href="https://github.com/SANKETOP">
       <i class="bi bi-github"></i> GitHub
        </a>
    </div>
</section>
    </>
  );
};

export default Hero;