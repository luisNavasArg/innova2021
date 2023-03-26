import React from 'react';
import '../App.css';
const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1 className="text-w">Comienza el repaso</h1>
          <p>Buena Suerte!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Comenzar</button>
        </div>
      </div>
    </div>
  );
}

export default Start;