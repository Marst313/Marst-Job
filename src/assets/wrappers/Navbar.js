import styled from 'styled-components';

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  z-index: 3;
  .logo {
    display: flex;
    align-items: center;
    width: 200px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-bg50);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    background: var(--primary-green-dark);
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--red-light);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    color: var(--white);
    &:hover {
      background: var(--red-dark);
    }
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  .menuButton {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 13%;
    width: 3.5em;
    height: 3.5em;
    border-radius: 0.5em;
    transition: all 0.3s;
    cursor: pointer;
    &:hover span.top,
    &:hover span.bot,
    &:hover span.mid {
      background: var(--primary);
    }
  }

  input[type='checkbox'] {
    width: 50px;
    height: 50px;
    position: absolute;
    display: none;
  }

  .menuButton span {
    width: 30px;
    height: 4px;
    background: var(--primary-green-dark);
    border-radius: 100px;
    transition: 0.3s ease;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    input[type] ~ span.top {
      transform: translateY(290%) rotate(45deg);
      background: var(--primary-green-dark);
      width: 40px;
    }

    input[type] ~ span.bot {
      transform: translateY(-270%) rotate(-45deg);
      background: var(--primary-green-dark);
      width: 40px;
    }

    input[type] ~ span.mid {
      transform: translateX(-20px);
      background: var(--primary-dark);
      opacity: 0;
    }
    input[type]:checked ~ span.top {
      transform: translateY(0%) rotate(0deg);
      width: 40px;
    }

    input[type]:checked ~ span.bot {
      transform: translateY(0%) rotate(0deg);
      width: 40px;
    }

    input[type]:checked ~ span.mid {
      transform: translateX(0px);
      opacity: 1;
    }
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
