import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import "../css/response.css";
import mainlogo from "../images/circle-cropped.png";

const Response = () => {
    
    const dispatch = useDispatch();
  const response = useSelector((state) => state.response);
  const renderResponseCard = (responsee) => {
    console.log(responsee);
    let responses = [];

  for (let response of responsee) {
    
      responses.push(
        <div className="dashboard1">
        <div className="container1">
          <div className="card-mi">
            <img src={mainlogo} className="medicinelogo" alt="image" />
            <div className="card-detailss">
            <h2>{response.queryName}</h2>
            <h3>shop name: {response.name}</h3>
            <h3>location: {response.location}</h3>
            </div>
            </div>
        </div>
     </div>
      );
      
  }
  return responses;
};
    return (
        <div className="container">
            {renderResponseCard(response.responses)}
        </div>
    )
}

export default Response;
