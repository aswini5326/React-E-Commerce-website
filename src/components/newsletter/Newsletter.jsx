import React from 'react';
import './Newsletter.css';
import { IoMdSend } from 'react-icons/io';

function Newsletter() {
  return (
    <div className="newsletter-container">
        <h1 className="newsletter-title">
            <div className="newsletter-desc">What's Fresh and New: Updates you Don't Want to Miss</div>
            <div className="input-container">
                <input className="newsletter-input"  placeholder='Youe Email'/>
                <button className="newsletter-button">
                    <IoMdSend className="icon" />
                </button>
            </div>
        </h1>
    </div>
  )
}

export default Newsletter