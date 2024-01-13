import React from 'react';
import '../styles.css';
import skill1 from '../assets/skill1.png';
import skill2 from '../assets/skill2.png';
import skill3 from '../assets/skill3.png';

const Skill = () => {
  return (
    <section class="section__container services__container" id="skill">
      <p class="section__subheader">WHAT Is My Skill</p>
      <h2 class="section__header">Awesome<br />Skills</h2>
      <div class="skill__grid">
        <div class="skill__card">
          <img src={skill1} alt="skill" />
          <h4>English Speaker</h4>
          <p>
            Able to speak English which is an international language, 
            to interact with any party, and easily receive information in global languages.
          </p>
          <a href="#"><i class="ri-arrow-right-line"></i></a>
        </div>
        <div class="skill__card">
          <img src={skill2} alt="skill" />
          <h4>Fast Learner</h4>
          <p>
            Able to understand things quickly, 
            solve problems more effectively and efficiently, 
            and able to adapt more quickly than other people
          </p>
          <a href="#"><i class="ri-arrow-right-line"></i></a>
        </div>
        <div class="skill__card">
          <img src={skill3} alt="skill" />
          <h4>Good Teamwork</h4>
          <p>
            Able to respect mutual decisions without conflict. 
            Responsible for mistakes made. 
            Have patience when waiting for other team members.
          </p>
          <a href="#"><i class="ri-arrow-right-line"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Skill;
