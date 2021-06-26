import React, { useState } from "react";
// import "../css/home.css";
import "../css/main.css"
import mainlogo from "../images/circle-cropped.png";
import { useDispatch } from "react-redux";
import { addRequest } from "../actions";
const Main = () => {
  const dispatch = useDispatch();

  const [queryName, setQueryName] = useState("");

  const submitQuery = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("queryName", queryName);
    // const queryy = {
    //     queryName
    // }
    dispatch(addRequest(form));
  };

  return (
    <div className="dashboard">
      <div className="container">
        <form onSubmit={submitQuery}>
          <div className="card-mi">
            <img className="medicinelogo" src={mainlogo} alt="image" />

            <div className="card-details">
              <input
                type="text"
                className="query"
                value={queryName}
                onChange={(e) => setQueryName(e.target.value)}
                placeholder="Medicine Name"
              />
              <br></br>
              <button className="submit" type="submit">
                SUBMIT
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Main;
