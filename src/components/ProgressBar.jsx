// Filename - Progress_bar.js

import React from "react";

const ProgressBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: "15px",
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    border: '1px solid white'
}

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
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
    fontSize: "10px",
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
