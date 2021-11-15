import React from "react"
import Holberton_logo from "./Holberton_logo.jpg";
import './App.css';

function App() {
  return (
    <>
    <div className="App-header">
        <img src={Holberton_logo}/>
        <h1>school dashboard</h1>
    <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
          <div className="App-footer">
         <p>Copyright 2020 - holberton School</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
