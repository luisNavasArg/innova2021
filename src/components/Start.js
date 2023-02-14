import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Comienza el repaso</h1>
          <p>Buena Suerte!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Comenzar</button>
        </div>
      </div>
    </div>
  );
}

export default Start;