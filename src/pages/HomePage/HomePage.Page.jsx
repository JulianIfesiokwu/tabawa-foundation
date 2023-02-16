import React from 'react';
import { Link } from 'react-router-dom';
import carouselImage1 from "../../assets/homepage_landing.jpg";
import cardImage3 from "../../assets/Gallery Images/tabawa (13).jpeg";
import volunteerImage from "../../assets/volunteer (2).jpg"
import educationIcon from "../../assets/education.svg";
import foodIcon from "../../assets/food.svg";
import fundIcon from "../../assets/fund.svg";
import empowerIcon from "../../assets/empower woman.svg";
import "./HomePage.Page.styles.css";

const HomePage = () => {

  return (
    <div className='home-page'>
      <div className="landing">
          <div className="landing-image-container">
            <img src={carouselImage1} alt="" className='landing-image' />
          </div>
          <div className="landing-text">
            <h1 className='landing-major'>Give a helping hand to those who need it.</h1>
            <Link to="/donate" className='donations-cta'>Make a Donation</Link>
          </div>
      </div>
      <section className="welcome">
        <div className="welcome-content">
          <div className="column-two">
          <h2 className="welcome-title">Who We Are</h2>
          <p className="welcome-info">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, qui! Incidunt dolorum consequuntur, repellendus voluptates accusantium nisi, asperiores, voluptatibus impedit culpa cum tempore inventore soluta atque fuga quibusdam fugiat nihil.
          </p>
          <h3 className="welcome-title">Our Aim</h3>
          <p className="welcome-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus nisi expedita quod facilis sequi, porro aut voluptas. Sequi deleniti et odit quos dolorem incidunt? Itaque quod commodi illo porro ipsam?
          </p>
          <Link className='about-cta' to='/about'>Learn more...</Link>
        </div>
        <div className="welcome-image-container">
          <img src={cardImage3} alt='' />
        </div>
        </div>
      </section>
      <section className="more-info">
        <h2 className='more-info-title'>How we help people</h2>
        <div className='info-details'>
          <div className='one-item'>
            <div className='item-img-container'>
              <img src={empowerIcon} alt='education-icon' />
            </div>
            <h3 className='item-title'>Empower</h3>
            <p className='item-short'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum pariatur nisi asperiores esse accusamus voluptatibus, praesentium velit iste voluptatum placeat.</p>
          </div>
          <div className='one-item'>
            <div className='item-img-container'>
              <img src={fundIcon} alt='education-icon' />
            </div>
            <h3 className='item-title'>Fund</h3>
            <p className='item-short'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum pariatur nisi asperiores esse accusamus voluptatibus, praesentium velit iste voluptatum placeat.</p>
          </div>
          <div className='one-item'>
            <div className='item-img-container'>
              <img src={educationIcon} alt='education-icon' />
            </div>
            <h3 className='item-title'>Educate</h3>
            <p className='item-short'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum pariatur nisi asperiores esse accusamus voluptatibus, praesentium velit iste voluptatum placeat.</p>
          </div>
          <div className='one-item'>
            <div className='item-img-container'>
              <img src={foodIcon} alt='food-icon' />
            </div>
            <h3 className='item-title'>Food</h3>
            <p className='item-short'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum pariatur nisi asperiores esse accusamus voluptatibus, praesentium velit iste voluptatum placeat.</p>
          </div>
        </div>      
      </section>
      <section className='volunteer-section'>
        <div className='volunteer-info'>
          <h2 className='volunteer-title'>Volunteer & change peoples lives today</h2>
          <p className='volunteer-short'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit modi eveniet sint totam necessitatibus repellendus vitae! Nisi aspernatur dolores enim porro veniam aut veritatis, neque dignissimos quibusdam, facilis ullam voluptatibus.</p>
          <Link to="/volunteer" className='volunteer-btn'>Volunteer</Link>
        </div>
        <div className='volunteeer-img-container'>
          <img src={volunteerImage} alt="volunteer" />
        </div>
      </section>
    </div>
  )
};

export default HomePage;