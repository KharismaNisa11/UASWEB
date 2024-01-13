import React from 'react';
import '../styles.css';
import about1 from '../assets/about1.jpg';
import about2 from '../assets/about2.jpg';
import about3 from '../assets/about3.jpg';

const AboutMe = () => {
  return (
    <div>
        <section class="banner">
            <div class="section__container banner__container">
                <h2 class="section__header">
                Who Am I?
                </h2>
             <div class="banner__content">
                <p>" I was born on 11th January 2002, first child of three siblings and oldest sister. A Genshin Impact addict who likes Chocolate, Cat and Chase Atlantic."
                </p>
                <h4>Risma</h4>
                <h5>Me</h5>
             </div>
            </div>
        </section>

        <section class="section__container blogs__container" id="aboutme">
            <p class="section__subheader">LATEST EDUCATION</p>
            <h2 class="section__header">Schools</h2>
            <div class="about__grid">
               <div class="about__card">
                    <img src={about1} alt="aboutme" />
                    <div class="about__content">
                        <h5>2008-2014</h5>
                        <h4>SDN II PELEM</h4>
                        <p>
                        This state elementary school was first established in 1963. 
                        Currently, SD Negeri 2 Pelem uses the government's learning curriculum guide, 
                        namely SD 2013.
                        </p>
                    <a href="#">Read More</a>
                    </div>
                </div>    
                <div class="about__card">
                    <img src={about2} alt="aboutme" />
                    <div class="about__content">
                        <h5>2014-2017</h5>
                        <h4>MTsN I Tulungagung</h4>
                        <p>
                         This state MTs was first established in 1978. 
                         Currently, MTSN 1 Tulungagung still uses a learning curriculum program. 
                         MTSN 1 Tulungagung received grade A accreditation status 
                         with a score of 91 (2021 accreditation) from BAN-S/M.
                        </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div class="about__card">
                    <img src={about3} alt="aboutme" />
                    <div class="about__content">
                    <h5>2017-2020</h5>
                    <h4>MAU DARUL 'ULUM</h4>
                    <p>
                        MAU Darul Ulum was founded in 1991 by the Leadership Council of the Darul 'Ulum (Rejoso) 
                        Islamic Boarding School (MPPDU) which was devoted solely to religious programs 
                        with the aim of producing ulama cadres.
                    </p>
                    <a href="#">Read More</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default AboutMe;
