import React, { Component } from 'react';

const Next = ({ next }) => {
  return (
    <div className="management">
      <button className="next" onClick={next}>
        Next
      </button>
    </div>
  );
};

export default Next;
