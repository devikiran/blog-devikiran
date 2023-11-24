import React from 'react';
import landingImage from '../../../static/img/circle-profile-pic.jpg'
import styles from './index.module.css';
import linkedIn from '../../../static/img/linkedin.png'
import github from '../../../static/img/github.png'

function goTolinkedIn() {
  window.location.href = "https://www.linkedin.com/in/devi-kiran/";
}

function goToGithub() {
  window.location.href = "https://github.com/devikiran";
}
const LandingPage = () => {
  return (
  <>
  <div className={styles.section}>
    <div className={styles.profile}>
      <div className={styles.section__pic_container}>
        <img src={landingImage} alt="Devi Kiran profile pic" />
      </div>
      <div className={styles.section__text}>
        <p className={styles.section__text__p1}>Hello, I'm</p>
        <h1 className={styles.title}>Devi Kiran</h1>
        <p className={styles.section__text__p2}>Software Engineer</p>
        <div className={styles.btn_container}>
          <button
            className={styles.btn_color_1}
          >
            Download CV
          </button>
          <button className={styles.btn_color_1} >
            Contact Info
          </button>
        </div>
        <div id={styles.socials_container}>
          <img
            src={linkedIn}
            alt="My LinkedIn profile"
            className={styles.icon}
            onClick={goTolinkedIn}
            
          />
          <img
            src={github}
            alt="My Github profile"
            className={styles.icon}
            onClick={goToGithub}
          />
        </div>
      </div>
      </div>
      </div>
    </>
  )

};

export default LandingPage;
