import React from 'react';

function ChoiceButtons({ choices, onChoice }) {
  if (!choices) return null;
  return (
    <div style={{ marginTop: 20 }}>
      {choices.map((choice, idx) => (
        <button key={idx} onClick={() => onChoice(choice.nextScene)} style={{ margin: 5 }}>
          {choice.text}
        </button>
      ))}
    </div>
  );
}

export default ChoiceButtons;
