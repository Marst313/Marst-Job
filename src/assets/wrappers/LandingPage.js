import styled from 'styled-components';

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > svg {
      cursor: pointer;
      display: flex;
      color: var(--primary);
      width: 30px;
      height: 30px;
    }
    & > div {
      display: none;
      gap: 1rem;
      & h5 {
        font-weight: bold;
        color: var(--textColor);
        height: 2rem;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
        border-bottom: 3px solid rgba(55, 156, 39, 0);
      }
      & h5:hover {
        border-bottom: 3px solid rgba(55, 156, 39, 1);
      }
    }
  }
  .page {
    scroll-behavior: smooth;
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  .container-works {
    margin-top: 7rem;
    margin-bottom: 5rem;
    & h1 {
      text-align: center;
    }
  }
  hr {
    margin-top: 3rem;
  }
  .footer-style {
    /* display: flex; */
    justify-content: center;
    text-align: center;
    background-color: var(--primary-green-light);
    padding: 20px;
    margin-top: 20rem;
    margin-bottom: 0;
  }
  .container-card {
    display: flex;
    flex-direction: column;
    gap: 5rem;
    justify-content: space-evenly;
    align-items: center;
    .desc {
      position: absolute;
      bottom: -3rem;
    }
    & div {
      position: absolute;
      background: linear-gradient(160deg, rgba(240, 255, 66, 1) 0%, rgba(55, 156, 39, 1) 80%);
      width: 85px;
      height: 85px;
      border-radius: 100%;
      left: -2.5rem;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        color: var(--black);
        width: 25px;
        height: 25px;
      }
    }
    & article {
      position: relative;
      width: 15rem;
      padding: 1rem 4rem;
      background-color: var(--primary-green-light);

      & h5 {
        margin-bottom: 0px;
        line-height: normal;
      }
      & p {
        margin: 5px 0px;
        line-height: normal;
      }
    }
  }
  @media (min-width: 992px) {
    .container-card {
      flex-direction: row;
      margin-top: 5rem;
    }
    .container-works {
      margin-top: 7rem;
      margin-bottom: 5rem;

      & h1 {
        text-align: center;
      }
    }
    .footer-style {
      justify-content: center;
      text-align: center;
      background-color: var(--primary-green-light);
      padding: 20px;
      margin-bottom: -5rem;
    }
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
    nav {
      & svg {
        display: none;
      }
      & > div {
        gap: 2.5rem;
        display: flex;
      }
    }
  }
`;
export default Wrapper;
