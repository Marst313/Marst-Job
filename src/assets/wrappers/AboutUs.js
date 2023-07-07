import styled from "styled-components";

const Wrapper = styled.section`
  .container-section {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .text-judul {
    width: 100%;
    height: 10vh;
    margin-top: 15%;
    font-size: 1rem;
    font-weight: bold;
    color: #44be31;
    text-align: center;
  }
  .kartu {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    max-width: 80%;
    margin: auto;
    margin-top: 5rem;
    justify-content: center;
  }
  .container-content {
    height: 80vh;
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
  .container-kartu {
    width: 17rem;
    height: 80%;
    box-shadow: 0rem 0.5rem 0.5rem #000000;
    border-top-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    background-color: #474e68;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .container-image {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.25);
    border: 2px solid #ffffff;
    border-radius: 50%;
    height: 40%;
    width: 70%;
    overflow: hidden;
  }
  .image {
    width: 100%;
  }
  .container-info {
    padding: 1rem 1rem;
  }
  .nama {
    text-align: center;
    font-weight: bold;
    color: #ffffff;
    font-size: 1.5rem;
  }
  .nim {
    text-align: center;
    color: #ffffff;
    font-size: 1rem;
  }
  .role {
    text-align: center;
    color: #ffffff;
    font-size: 1.5rem;
  }
`;
export default Wrapper;
