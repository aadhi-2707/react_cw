import React from "react";

import "./App.css";

function PersonalInfo() {
  const name = "Alex";
  const age = 20;
  const isStudent = true;
  const favoriteHobbies = ["Reading", "Hiking", "Coding"];
  const headingColor = "lightblue";

  // Generate hobbies list using a for loop
  const hobbyList1 = [];
  for (let i = 0; i < favoriteHobbies.length; i++) {
    hobbyList1.push(<li key={i}>{favoriteHobbies[i]}</li>);
  }

  // Generate hobbies list using map()
  const hobbyList2 = favoriteHobbies.map((hobby, index) => (
    <li key={index}>{hobby}</li>
  ));

  // Function to handle button click
  function showEnthusiasm() {
    document.getElementById("enthusiasmMsg").innerText =
      "Hello guys! I love my hobbies!";
    document.getElementById("mainHeading").style.backgroundColor = headingColor;
  }

  return (
    <div className="container text-center mt-5">
     
      <h1 id="mainHeading" className="p-3">
         Personal Information
      </h1>

      
      <div className="card mx-auto mb-4" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Age: {age}</p>
          <p className="card-text">Student: {isStudent.toString()}</p>
        </div>
      </div>

      
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h5>Hobbies </h5>
          <ul>{hobbyList1}</ul>
        </div>
        <div className="col-md-4">
          <h5>Hobbies:</h5>
          <ul>{hobbyList2}</ul>
        </div>
      </div>

      {/* Interactive Button */}
      <button className="btn btn-primary mt-3" onClick={showEnthusiasm}>
        Show Enthusiasm
      </button>

      {/* Enthusiasm Message */}
      <p id="enthusiasmMsg" className="mt-3">
        Click the button to see my enthusiasm!
      </p>
    </div>
  );
}

export default PersonalInfo;
