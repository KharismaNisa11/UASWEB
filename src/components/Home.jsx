import React from 'react';
import '../styles.css';
import profileImage from '../assets/profile.jpg';

const Header = () => {
  return (
    <header class="header" id="home">
      <nav>
        <div class="nav__logo"><a href="#">My Profile</a></div>
        <ul class="nav__links">
          <li class="link"><a href="header">Home</a></li>
          <li class="link"><a href="skill">Skill</a></li>
          <li class="link"><a href="hobby">Hobby</a></li>
          <li class="link"><a href="aboutme">About Me</a></li>
          <li class="link"><a href="contact">Contact</a></li>
        </ul>
      </nav>
      <div class="section__container header__container">
        <div class="header__content">
          <h1>Hi,<br />I'm Kharisma<br />Informatic's Student</h1>
          <button class="btn">HIRE ME</button>
        </div>
        <div class="header__image">
          <img src={profileImage} alt="header profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
