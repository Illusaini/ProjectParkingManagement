import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <div>
      {/* FOOTER START */}
      <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>Company</h1>
            <ul>
              {['About', 'Mission', 'Services', 'Social', 'Get in touch'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h1>Products</h1>
            <ul>
              {['About', 'Mission', 'Services', 'Social', 'Get in touch'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h1>Accounts</h1>
            <ul>
              {['About', 'Mission', 'Services', 'Social', 'Get in touch'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h1>Resources</h1>
            <ul>
              {['Webmail', 'Redeem code', 'WHOIS lookup', 'Site map', 'Web templates', 'Email templates'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h1>Support</h1>
            <ul>
              {['Contact us', 'Web chat', 'Open ticket'].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="col social">
            <h1>Social</h1>
            <ul>
              <li key="facebook">
                <img src="https://svgshare.com/i/5fq.svg" alt="Facebook" />
              </li>
              <li key="twitter">
                <img src="https://svgshare.com/i/5eA.svg" alt="Twitter" />
              </li>
              <li key="instagram">
                <img src="https://svgshare.com/i/5f_.svg" alt="Instagram" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* END OF FOOTER */}
    </div>
  );
};

export default Footer;