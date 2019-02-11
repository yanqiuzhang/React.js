import React from "react";

const CvCard = (props) => {
  let cv = props.cv
  return (
    <div key={cv.id}>
     <div style={{ paddingTop: "20px" }} >
        <div>
          <h1>{cv.name}</h1>
        </div>
        <p>{cv.experience}</p>
        <p>{cv.education}</p>
      </div>
    </div>
  )
}

export default CvCard