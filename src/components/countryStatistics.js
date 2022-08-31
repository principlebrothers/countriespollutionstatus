import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdAssignmentReturn } from 'react-icons/md';

const Statistics = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="statContainer">
      <MdAssignmentReturn className="statIcon" onClick={handleClick} />
      <h1>Statistics</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, quidem.
      </p>
    </div>
  );
};

export default Statistics;
