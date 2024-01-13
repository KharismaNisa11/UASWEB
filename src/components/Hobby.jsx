import React from 'react';
import '../styles.css';
import hobby1 from '../assets/hobby1.jpg';
import hobby2 from '../assets/hobby2.jpg';
import hobby3 from '../assets/hobby3.jpg';
import hobby4 from '../assets/hobby4.jpg';

const Hobby = () => {
  return (
    <section class="hobby__container" id="hobby">
      <p class="section__subheader">Me</p>
      <h2 class="section__header">About My Hobbies</h2>
      <div class="hobby__grid">
        <div class="hobby__card">
          <img src={hobby1} alt="hobby" />
          <h4>Games</h4>
          <p>I Like Playing Games</p>
        </div>
        <div class="hobby__card">
          <img src={hobby2} alt="hobby" />
          <h4>Reading</h4>
          <p>I Love Reading Books</p>
        </div>
        <div class="hobby__card">
          <img src={hobby3} alt="hobby" />
          <h4>Music</h4>
          <p>I Like Listening to Music</p>
        </div>
        <div class="hobby__card">
          <img src={hobby4} alt="hobby" />
          <h4>Photography</h4>
          <p>Love to Take a Photo</p>
        </div>
      </div>
      <div class="hobby__nav">
        <span><i class="ri-arrow-left-line"></i></span>
        <span><i class="ri-arrow-right-line"></i></span>
      </div>
    </section>
  );
}

export default Hobby;
