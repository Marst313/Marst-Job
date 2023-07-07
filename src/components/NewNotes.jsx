import React from 'react';

const NewNotes = ({ title, description, date }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
};

export default NewNotes;
