import React from "react";
import "./ImtahanContent.css";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { RiTimer2Fill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";

const ImtahanContent = () => {
  return (
    <div className="container">
      <div className="blackDiv">
        <div>
          <h1>3 cu sinif imtahani</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <button
          type="button"
          class="btn btn-light whiteBtn"
          style={{ width: 200 }}
        >
          1 AZN - indi al
        </button>
        <img src="../public/photo.png" />
      </div>
      <section className="imtahanMelumat">
        <h4>Melumat</h4>
        <div className="iconsDiv">
          <div className="sameDiv">
            <RiTimer2Fill />
            <p>45 deqiqe</p>
          </div>
          <div className="sameDiv">
            <FaEnvelopeOpenText />
            <p>20 sual</p>
          </div>
          <div className="sameDiv">
            <FaCalendar />
            <p>22.05.2023 hazirlanib</p>
          </div>
        </div>
        <h4>Suallar</h4>
        <p>Azerbaycan dili - 10 sual</p>
        <p>Riyaziyyat - 10 sual</p>
      </section>
    </div>
  );
};

export default ImtahanContent;
