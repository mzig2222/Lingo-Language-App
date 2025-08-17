import React from 'react';

function Character({ character }) {
  if (!character) return null;
  return (
    <div style={{ display: 'inline-block', margin: '0 20px' }}>
      <img src={`/assets/sprites/${character.sprite}`} alt={character.name} style={{ width: 120 }} />
      <div>{character.name}</div>
    </div>
  );
}

export default Character;
