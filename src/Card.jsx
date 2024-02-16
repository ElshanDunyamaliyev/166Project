import React from "react";
import { RiTimer2Fill } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import "./Card.css";
import { BsDot } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const Card = () => {
  const object = {
    header: "3-cü sinif imtahanı",
    time: "45 dəqiqə",
    rate: 4,
    text: "Suallar \n 10 sual - Azərbaycan Dili \n 10 sual - Riyaziyyat",
    basliq1: "Ibtidai sinif",
    basliq2: "3-cü sinif",
    buttonText: "1 AZN - indi al",
  };

  return (
    <div className="mycard">
      <h4 style={{ marginBottom: 15 }}>3-cü sinif imtahanı</h4>
      <div className="section2" style={{ marginBottom: 15 }}>
        <div className="timer">
          <RiTimer2Fill size={24} />
          <p>45 dəqiqə</p>
        </div>
        <div className="star">
          <FaStar color="black" />
          <FaStar color="black" />
          <FaStar color="black" />
          <FaStar color="black" />
          <FaStar color="gray" />
          <GoDotFill />
          <p>2 rəy</p>
        </div>
      </div>
      <h4 style={{ marginBottom: 10 }}>Suallar</h4>
      <p style={{ marginBottom: 5 }}>
        <BsDot />
        10 sual - Azərbaycan Dili
      </p>
      <p style={{ marginBottom: 5 }}>
        <BsDot />
        10 sual - Riyaziyyat Dili
      </p>
      <hr />
      <button type="button" class="btn btn-light">
        Ibtidai sinif
      </button>
      <button type="button" class="btn btn-light">
        3-cü sinif
      </button>
      <button
        type="button"
        class="btn btn-outline-dark"
        style={{ marginTop: 20 }}
      >
        1 AZN - indi al
      </button>
    </div>
  );
};

export default Card;
