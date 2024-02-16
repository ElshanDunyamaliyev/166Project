import React from "react";
import "./Content.css";
import Card from "./Card";
import ExamType from "./ExamType";

const Content = () => {
  const array = [
    "Buraxılış",
    "Blok",
    "Təkmilləşmə",
    "Ibtidai Sinif",
    "Liseylərə",
    "Magistratura",
    "Olimpiadalar",
    "Fənn İmtahanı",
  ];
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
    <div className="container">
      <div className="imageContainer">
        <img
          src="../public/officeImg.jpg"
          className="img-fluid"
          height={600}
        ></img>
        <div class="overlay"></div>
        <div className="text-overlay">
          <h2>Imtahanlar</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            amet magnam suscipit molestiae earum blanditiis sit, incidunt
            dolorum nostrum cum placeat itaque quae, ratione obcaecati. Debitis
            laudantium totam in ad.
          </p>
        </div>
      </div>
      <section className="categorySection">
        <h3>Imtahan</h3>
        <h2>Kateqoriya seç</h2>
        <div className="examCategory">
          {array.map((e) => {
            return <button className="categoryButton">{e}</button>;
          })}
        </div>
      </section>
      <section className="buySection container" style={{ marginTop: 50 }}>
        <h3>Ən çox işlənənlər</h3>
        <h2>İmtahanlar</h2>
        <div className="selectType">
          <ExamType />
          <div className="selectType2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
