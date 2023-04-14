import React from 'react';
import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>Tracking your jobs application, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste aut repudiandae placeat quae eius quis rem odio nesciunt libero obcaecati?</p>
          <Link to="/register" className="btn btn-hero" type="button">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="Marst job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
