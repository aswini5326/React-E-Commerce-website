import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaPinterest } from 'react-icons/fa';
import { CiTwitter } from 'react-icons/ci';
import { footerLinks } from '../../data';
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';
import payment from '../../assets/payment.png';

function Footer() {
  return (
    <div className="footer-container">
        <div className="footer-left">
            <h1 className="footer-logo">Rise Of Coding.</h1>
            <p className="footer-desc">
            Discover your perfect style with our exclusive collection of dresses for every occasion. From casual wear to elegant evening outfits, we bring you the latest trends, premium quality, and unbeatable prices. Shop now and elevate your wardrobe with ease!
            </p>
            <div className="social-container">
                <div className="social-icon" style={{backgroundColor: "#3b5999"}}>
                    <FaFacebook className='icon' />
                </div>
                <div className="social-icon" style={{backgroundColor: "#e44059"}}>
                    <FaInstagram className='icon' />
                </div>
                <div className="social-icon" style={{backgroundColor: "#55acee"}}>
                    <CiTwitter className='icon' />
                </div>
                <div className="social-icon" style={{backgroundColor: "#e60023"}}>
                    <FaPinterest className='icon' />
                </div>
            </div>
        </div>

        <div className='footer-center'>
            <h3>Useful Links</h3>
            <ul className='footer-list'>
                {footerLinks.map((link) => (
                    <li key={link.id} className='footer-list-item'>{link.title}</li>
                ))}
            </ul>
        </div>

        <div className="footer-right">
            <div className="footer-title">Contact</div>
            <div className="contact-item">
                <FaLocationDot style={{marginRight: "10px"}} />   123 Street, City
            </div>
            <div className="contact-item">
                <FaPhoneAlt style={{marginRight: "10px"}} />   +123456789
            </div>
            <div className="contact-item">
                <IoMdMail style={{marginRight: "10px"}} />   email@gmail.com
            </div>
            <img className='payment' alt=' ' src={payment} />
        </div>
    </div>
  )
}

export default Footer