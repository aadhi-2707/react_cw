// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//        <div className='container'>
//     <div className='row'>
//       <div className='col-md-4 bg-primary mr-2'> column 1</div>
//       <div className='col-md-4 bg-secondary' > column 2</div>
//     </div>
//     <img src="https://cdn.motor1.com/images/mgl/LRAQQ/s1/2019-ford-mustang-shelby-gt350.webp" alt="Placeholder" className='img-fluid rounded'/>
    
//            </div>
//     </div>
//   );
// }
// export default App;
import './App.css';
import React from 'react';

import image from "./images/Create an anime imag.png";

function WelcomeCard () {
  let userName = "Adithyan";
  console.log("React app started");

  return (
    <div className="d-flex justify-content-center align-items-center bg-light">
      <div className="card text-center p-4 shadow" style={{ width: '400px',height:'600px' }}>
        <h2 style={{ color: '#007bff', fontWeight: 'bold' }}>
          Welcome to React Learning, {userName}
        </h2>
        <img
          src={image}
          alt="Internal"
          className="img-fluid my-3"
          style={{ width: '100px',height:'200px' }}
        />
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.U_VJuupQohwnzXcKMztqWgHaEo?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="External"
          className="img-fluid mb-3"
          style={{ width: '300px' }}
        />
        <p className="text-muted">
          This is your first card with images and styles!
        </p>
      </div>
    </div>
  );
};

export default WelcomeCard;