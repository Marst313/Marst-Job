import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 3rem;
  padding-right: 5rem;
  img {
    display: none;
  }
  ul {
    list-style-type: disc;
  }
  .list {
    list-style-type: none;
  }

  @media (min-width: 992px) {
    margin-top: 20rem;

    img {
      width: 50rem;
      margin-left: 5rem;
      display: flex;
    }
    .container-support {
      width: 50%;
      width: 700px;
      height: 500px;
    }
  }
`;

export default Wrapper;
