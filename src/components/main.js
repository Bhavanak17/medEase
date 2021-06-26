import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/main.css";
// import mainlogo from "../images/.png";
import mainlogo from "../images/circle-cropped.png";
import { getAllRequest, sendResponse } from "../actions";
const Main = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.request);

  const postResponse = (name) => {
      const queryi = {
          queryName: name
      }
      dispatch(sendResponse(queryi));
  }

  const specificCard = async(id, queryNam) =>{
    const element = await document.getElementById(id);
    console.log(element);
    const button = await element.getElementsByTagName("button");

    button.onclick = postResponse(queryNam);


  }

  const handleNoButton = (id) => {
    const element = document.getElementById(id);
    element.innerHTML = "";
    element.style =""

  }


  const renderQueryCard = (querie) => {
      console.log(querie);
      let queries = [];

    for (let query of querie) {
  
        queries.push(
          
          <div  id={query._id+query.queryName}>
            <div className="dashboard">
              <div className="container">
            <div className="card-mi">
            <img className="medicinelogo" src={mainlogo} alt="image" />
         <div className="card-details">
           <h2>{query.queryName}</h2>
           <div id={query._id} className="btn-container">
             <button className="submit1" onClick={() => postResponse(query.queryName)}>
             YES
             </button>
             <button className="submit2" onClick={() => handleNoButton(query._id+query.queryName)}>
               NO
             </button>
            </div>
            </div>
            </div>
          </div>
       </div>
       </div>
        );
        
    }
    return queries;
  };

  return (
    <div className="container">
      {/* <div className="card-mi">
        <img src={mainlogo} alt="image" />
        <div className="card-details">
          <h2>Medicine Name</h2>
          <div className="btn-container">
            <button className="submit" type="submit">
              YES
            </button>
            <button className="submit" type="submit">
              NO
            </button>
          </div>
        </div>
      </div> */}
      {renderQueryCard(query.queries)}

    </div>
  );
};
export default Main;
