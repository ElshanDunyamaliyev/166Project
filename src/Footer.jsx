import React from "react";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import "./Footer.css";
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { RiRoundedCorner, RiWhatsappFill } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";

const Footer = () => {
  return (
    <div style={{ background: "#fafafa", marginTop: 30, padding: 20 }}>
      <div className="container f1">
        <div className="f2">
          <h2>Logo</h2>
          <p>
            <IoMail size={30} /> Nümunə@gmail.com
          </p>
          <p>
            <FaPhone size={30} /> 000 000 00 00
          </p>
        </div>
        <div className="f4">
          <div className="f3">
            <h3>Haqqimizda</h3>
            <h3>Kitablar</h3>
            <h3>Imtahanlar</h3>
            <h3>Bizimle Elaqe</h3>
            <select style={{ border: 0 }}>
              <option>Az</option>
              <option>En</option>
              <option>Ru</option>
            </select>
          </div>
          <div style={{ textAlign: "right" }}>
            <AiFillInstagram size={30} style={{ marginLeft: 10 }} />
            <AiFillFacebook size={30} style={{ marginLeft: 10 }} />
            <RiWhatsappFill size={30} style={{ marginLeft: 10 }} />
            <BsTelegram size={30} style={{ marginLeft: 10 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
