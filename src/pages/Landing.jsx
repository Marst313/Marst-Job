import React from 'react';
import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiLoginBoxLine } from 'react-icons/ri';
import { AboutUs } from '../components/AboutUs';
import { MdLibraryAdd } from 'react-icons/md';
import { BsFileBarGraphFill } from 'react-icons/bs';
import { Support } from '../components/Support';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        <div>
          <a href="#Hiw">
            <h5>How it works</h5>
          </a>
          <a href="">
            <h5>About us</h5>
          </a>
          <a href="">
            <h5>Support</h5>
          </a>
        </div>
        <GiHamburgerMenu />
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
      <hr />
      <div className="container" id="Hiw">
        <div className="container-works">
          <h1>How it works</h1>

          <div className="container-card">
            <article>
              <div>
                <RiLoginBoxLine />
              </div>
              <h5>Register</h5>
              <p>Your account</p>
              <p className="desc">You need to create account first</p>
            </article>

            <article>
              <div>
                <MdLibraryAdd />
              </div>
              <h5>Add job</h5>
              <p>Create new job</p>
            </article>
            <article>
              <div>
                <BsFileBarGraphFill />
              </div>
              <h5>Analysis</h5>
              <p>Your account</p>
            </article>
          </div>
        </div>
      </div>
      <AboutUs />
    </Wrapper>
  );
};

export default Landing;
