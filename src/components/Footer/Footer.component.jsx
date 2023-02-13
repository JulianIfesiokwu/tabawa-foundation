import React, { useContext } from 'react';
import { SubscribeContext } from '../../context/SubscribeContext';
import { NavLink } from 'react-router-dom';
import Logo from "../../assets/tabawa_logo.png"
import "./Footer.styles.css";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  const { handleInput, handleSubmit } = useContext(SubscribeContext);

  return (
    <div className='footer'>
      <section className="details">
        <div className="footer-name">
          <img src={Logo} alt="logo" className='logo' />
          <p>Tabawa Foundation</p>
        </div>
        <div className="address">
          <h3>Contact Information</h3>
          <p className='location-info'>109-16 211th St Queens Village Jamaica NY 11429</p>
          <p className='phone-no'>321 Rd F Close Festac Town Lagos Nigeria.</p>
          <p className='phone-no'>+1 3473360734</p>
          <p className='phone-no'>+234 8033209276</p>
          <p className="email">info@tabawafoundation.com</p>
        </div>
        <div className="explore">
          <h3 className='explore-title'>Explore</h3>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact-us">Who we are?</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/donate">Donations</NavLink>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="newsletter">
          <div className='newsletter-title'>
            <p>Get updates about Tabawa in your inbox</p>
          </div>
          <input 
            type="email" 
            placeholder='Email' 
            name='subscriber-email' 
            onChange={(e) => handleInput(e)}
            required/>
          <button type="submit" className='newsletter-btn'>Submit</button>
        </form>
    </section>
    <p className='copyright'>Copyright &copy;{year} www.tabawaFoundation.com</p>
  </div>
  );
};

export default Footer;