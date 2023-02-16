import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import carouselImage1 from "../../assets/homepage_landing.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneAndroid } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import './ContactUs.styles.css';
import { ContactFormContext } from '../../context/ContactFormContext';

export const ContactUs = () => {
  const { handleInput, handleSubmit } = useContext(ContactFormContext)

  return (
    <section className="contact-details">
      <div className="landing">
          <div className="landing-image-container">
            <img src={carouselImage1} alt="" className='landing-image' />
          </div>
          <div className="landing-text">
            <h1 className='landing-major'>Give a helping hand to those who need it.</h1>
            <Link to="/donate" className='donations-cta'>Make a Donation</Link>
          </div>
      </div>
        <form className='contact-form' onSubmit={(e) => handleSubmit(e)}>
          <h3 className="contact-title">Get in Touch</h3>
          <textarea 
            placeholder='Enter Message'  
            id="" 
            cols="30" 
            rows="5"
            name='contact-message'
            onChange={(e) => handleInput(e)}
            required
            />
          <div className="first-row">
            <input 
              type="text" 
              placeholder='Name' 
              name='contact-name'
              onChange={(e) => handleInput(e)}
              required
              />
            <input 
              type="email" 
              placeholder='Email'
              name='contact-email'
              onChange={(e) => handleInput(e)}
              required/>
          </div>
          <div className="second-row">
            <input 
              type="text" 
              placeholder='Subject' 
              name='contact-subject'
              onChange={(e) => handleInput(e)}
              required
              />
          </div>
          <button className='send-message' type='submit'>Send</button>
        </form>
        <div className="business-info">
          <p><FaHome size="30" color="#833556" />3109-16 211th St Queens Village Jamaica NY 11429</p>
          <p><FaHome size="30" color="#833556" />321 Rd F Close Festac Town</p>
          <p><MdPhoneAndroid size="30" color="#833556" />+1 3473360734</p>
          <p><MdPhoneAndroid size="30" color="#833556" />+234 8033209276</p>
          <p><AiOutlineMail size="30" color="#833556" />info@tabawafoundation.com</p>
        </div>
    </section>
  );
};

export default ContactUs;
