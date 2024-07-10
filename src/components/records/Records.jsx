import React from "react";
import "./records.css";

const Records = () => {
  const studentRecords = [
    {
  
      class: "6th",
      year: 2022,
      award: "Best Student of Class",
    },
    {
  
      class: "7th",
      year: 2023,
      award: "Best Student of School",
    },
    {
    
      class: "8th",
      year: 2024,
      award: "Best Conduct in School",
    },
  ];
  return (
    <div className="recordssection">
      <h1>Records</h1>

      <div className="schoolRecords">
        <h1>School Records</h1>
        <ul>
          {studentRecords.map((record, index) => {
            return (
              <li key={index} className="li">
                <h2>Class: {record.class}</h2>
                <p>Year: {record.year}</p>
                <p>Award: {record.award}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Records;
