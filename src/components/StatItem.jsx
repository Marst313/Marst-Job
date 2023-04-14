import React from 'react';
import Wrapper from '../assets/wrappers/StatItem';

const StatItem = ({ title, count, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5>{title}</h5>
    </Wrapper>
  );
};

export default StatItem;
