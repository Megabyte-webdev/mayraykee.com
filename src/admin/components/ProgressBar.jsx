// Filename - Progress_bar.js

import React from "react";

const ProgressBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: "12px",
    width: "100%",
    backgroundColor: "whitesmoke",
    border: '1px solid white'
}

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    aligntItems: 'start',
    textAlign: 'right'
  };

  const progresstext = {
    paddingRight: 5,
    color: "white",
    fontWeight: 500,
    fontSize: "8px",
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
