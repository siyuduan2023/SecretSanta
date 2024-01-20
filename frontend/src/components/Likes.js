import React from 'react';

export default function Likes() {
  return (
    <div className="participantlikes">
      <h3>Likes</h3>
      <label htmlFor="like1">Like 1:</label>
      <input type="text" id="like1" />

      <label htmlFor="like2">Like 2:</label>
      <input type="text" id="like2" />

      <label htmlFor="like3">Like 3:</label>
      <input type="text" id="like3" />
    </div>
  );
}
