import React from "react";
import Wrapper from "../assets/wrappers/AboutUs";
import Nyoman from "../assets/images/Nyoman.webp";
import Ndaru from "../assets/images/Ndaru.jpg";
import Bayu from "../assets/images/Bayu.webp";
import Jawahir from "../assets/images/Jawahir.webp";
import Bani from "../assets/images/Bani.webp";

export const AboutUs = () => {
  return (
    <Wrapper>
      <section className="container-section">
        <div className="text-judul">
          <h1>Mau Kenalan ?</h1>
        </div>
        <div className="kartu">
          <div className="container-content">
            <section className="container-kartu">
              <div className="container-image">
                <img className="image" src={Nyoman} alt="" />
              </div>
              <div className="container-info">
                <h1 className="nama">I Nyoman Dharma</h1>
                <p className="nim">21.11.4110</p>
                <p className="role">GLADIATOR</p>
              </div>
            </section>
          </div>

          <div className="container-content">
            <section className="container-kartu">
              <div className="container-image">
                <img className="image" src={Ndaru} alt="" />
              </div>
              <div className="container-info">
                <h1 className="nama">Ndaru Windra s</h1>
                <p className="nim">21.11.4089</p>
                <p className="role">GLADIATOR</p>
              </div>
            </section>
          </div>

          <div className="container-content">
            <section className="container-kartu">
              <div className="container-image">
                <img className="image" src={Bayu} alt="" />
              </div>
              <div className="container-info">
                <h1 className="nama">I Wayan Bayu</h1>
                <p className="nim">21.11.4089</p>
                <p className="role">GLADIATOR</p>
              </div>
            </section>
          </div>

          <div className="container-content">
            <section className="container-kartu">
              <div className="container-image">
                <img className="image" src={Jawahir} alt="" />
              </div>
              <div className="container-info">
                <h1 className="nama">Muhammad Jawahir</h1>
                <p className="nim">21.11.4053</p>
                <p className="role">GLADIATOR</p>
              </div>
            </section>
          </div>

          <div className="container-content">
            <section className="container-kartu">
              <div className="container-image">
                <img className="image" src={Bani} alt="" />
              </div>
              <div className="container-info">
                <h1 className="nama">Jihan Rabbani</h1>
                <p className="nim">21.11.4067</p>
                <p className="role">GLADIATOR</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
