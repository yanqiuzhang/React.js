import React from "react";

const Hello = () => {
  return (
    <div className="container">
      <div className="space">
      <h1 style={{color: "rgb(69, 86, 120)",fontStyle:'oblique', fontFamily: 'Times New Roman, Times, serif', textAlign: 'center', zIndex: '1', paddingTop:"20px", fontSize: "60px"}}>Hello World</h1>
        <div className="stars">&nbsp;</div>
        <div className="earth">
          <div className="earth__shadow">&nbsp;</div>
          <div className="earth__land--1">&nbsp;</div>
          <div className="earth__land--2">&nbsp;</div>
          <div className="earth__land--join">&nbsp;</div>
          <div className="earth__land--3">&nbsp;</div>
          <div className="earth__land--4">&nbsp;</div>
          <div className="earth__land--5">&nbsp;</div>
          <div className="earth__cloud--1">&nbsp;</div>
          <div className="earth__cloud--2">&nbsp;</div>
          <div className="earth__cloud--3">&nbsp;</div>
        </div>
        <div className="moon">
          <div className="moon__shadow">&nbsp;</div>
          <div className="moon__maria--1">&nbsp;</div>
          <div className="moon__maria--2">&nbsp;</div>
          <div className="moon__maria--3">&nbsp;</div>
        </div>
      </div>
    </div>
  )
};

export default Hello