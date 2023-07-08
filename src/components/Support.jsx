import React from 'react';
import Wrapper from '../assets/wrappers/Support';
import sp from '../assets/images/support.svg';

export const Support = () => {
  return (
    <Wrapper className="container" id="support">
      <div className="container-support">
        <h1>Always there for you</h1>
        <p></p>
        <ul>
          <b>Contact us :</b>
          <li>Don't hesitate to contact us if you have any questions or need help. We are here to help you!</li>
          <li>We'd love to hear from you! Please contact us if you are have questions, feedback, or issues that need to be resolved.</li>
          <li>Our support team is ready to help you. Please don't hesitate to contact us via the communication channels below.</li>
        </ul>
        <ul className="list">
          <li>
            <a href="mailto:bayiabayu@gmail.com">Bayiabayu@gmail.com</a>
          </li>
          <li>
            <a href="https://wa.me/6282253381937?text=Assalamualaikum Bang">082253381937</a>
          </li>
        </ul>
      </div>
      <div className="container-support">
        <img src={sp} alt="" />
      </div>
    </Wrapper>
  );
};
