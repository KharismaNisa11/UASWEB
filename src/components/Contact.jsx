import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    if(email.length === 0){
      alert("Email has left Blank!");
    }
    else{
      const url = 'http://localhost/UASWeb/src/components/connect.php';
      let fData = new FormData();
      fData.append('email', email);
      axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));
    }
  }
  return (
    <footer className="footer" id="contact">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h2>That's My Profile</h2>
          <p>rismanissa17@gmail.com</p>
        </div>
        <div className="footer__col">
          <p>Join For Updates</p>
          <form >
            <input type="text" placeholder="Enter your email" id='email' name='email' value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>Send</button>
          </form>
          <div className="footer__socials">
            <a href="#"><i className="ri-whatsapp-fill"></i></a>
            <a href="#"><i className="ri-facebook-fill"></i></a>
            <a href="#"><i className="ri-instagram-fill"></i></a>
          </div>
        </div>
        <div className="footer__col">
          <h4>My Services</h4>
          <a href="header">Home</a>
          <a href="skill">Skill</a>
          <a href="hobby">Hobby</a>
          <a href="aboutme">About Me</a>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2023 Web Kharisma Khairun Nisa. All rights reserved.
      </div>
    </footer>
  );
}

export default Contact;
