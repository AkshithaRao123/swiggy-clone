import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className='about-page'>
      <h1>Contact Us</h1>
      <h2>For any queries feel free to contact us at:</h2>
      <p>
        <strong>Email: </strong>
        <Link to="mailto:akshitha@cognimuse.com">
          akshitha@cognimuse.com
        </Link>
      </p>
    </div>
  );
};

export default Contact;
