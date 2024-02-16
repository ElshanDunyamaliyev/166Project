import React from "react";
import "./ExamType.css";

const ExamType = () => {
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
  return (
    <div className="imtahanSec">
      <h4>Filter</h4>
      <p>Kategoriyalar</p>
      <div className="btnOrder">
        {array.map((e) => {
          return <button class="categoryBtn">{e}</button>;
        })}
      </div>
    </div>
  );
};

export default ExamType;
