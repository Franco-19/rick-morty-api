import React from 'react';

/** Styles */
import './BadgeElement.styles.css';

const BadgeElement = ({ characterName, characterImage }) => {
  return (
    <div className="badge-container">
      <img className="badge-container__img" src={characterImage} alt={characterName} />
      <div className="badge-container__info">
        <p className="badge-container__info--title">{characterName}</p>
        <button className="badge-container__info--button">Ver mas</button>
      </div>
    </div>
  );
};

export default BadgeElement;
