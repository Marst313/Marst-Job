import styled from 'styled-components';

const Wrapper = styled.div`
  & > div > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    svg {
      cursor: pointer;
      width: 35px;
      height: 35px;
      align-self: center;
      margin-top: -0.25rem;
      color: var(--primary);
    }
  }

  .modal-notes {
    background-color: rgba(55, 156, 39, 0.5);
    border-radius: 20px;
    backdrop-filter: blur(5px);
    position: absolute;
    z-index: 2;
    height: 30rem;
    width: 50rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: none;
    flex-direction: column;
    & h5 {
      margin-top: 2rem;
    }

    button {
      background-color: var(--blue);
      margin-top: 1rem;
      align-self: flex-end;
      align-content: flex-end;
    }

    & > svg {
      position: absolute;
      top: 2rem;
      right: 2rem;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
  h5 {
    margin: 0;
    padding: 0;
    text-align: center;
  }
  form {
    margin: auto;
  }
  input {
    background-color: var(--white);
    border-radius: 5px;
    border: 0;
    padding: 0.5rem;
    &:focus {
      outline: none;
    }
  }
  textarea {
    border: 0;
    background-color: var(--white);
    resize: none;
    border-radius: 5px;
    &:focus {
      outline: none;
    }
  }
  .container-notes {
    margin-top: 1rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
  .new-notes {
    background-color: var(--primary);
    width: 20rem;
    padding: 0.25rem;
    box-shadow: 5px 5px 5px var(--primary-green-dark);
    button {
      margin-left: 1rem;
      margin-bottom: 1rem;
    }
    & p {
      font-size: 15px;
      margin-top: 0;
      margin-left: 1.2rem;
      margin-bottom: 0.25rem;
    }
    & > div {
      display: flex;
      justify-items: center;
      align-items: center;
      align-content: center;
      justify-content: space-between;
      padding-right: 1rem;
      padding-left: 1rem;

      gap: 0.5rem;
      & > h4 {
        color: var(--white);
        font-size: 12px;
      }
    }
  }
`;
export default Wrapper;
