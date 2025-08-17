import React from 'react';
import '../scss/Scene.scss';

function Scene({ scene, onChoice }) {
  return (
    <div className="scene-container">
      {scene.background && (
        <div
          className="scene-background"
          style={{ backgroundImage: `url(/assets/backgrounds/${scene.background})` }}
        />
      )}
      <div className="scene-content">
        <h2>{scene.text}</h2>
        {scene.character && (
          <div className="scene-character">
            <img
              src={`/assets/sprites/${scene.character.sprite}`}
              alt={scene.character.name}
              className="scene-character-img"
            />
            <div>{scene.character.name}</div>
          </div>
        )}
        {scene.dialogue && scene.dialogue.map((d, i) => (
          <div key={i}>
            <strong>{d.speaker}:</strong> {d.text}
            <div style={{ marginTop: 20 }}>
              {d.responses && d.responses.map((resp, idx) => (
                <button key={idx} onClick={() => onChoice(resp.nextScene)} className="scene-choice-btn">
                  {resp.text}
                </button>
              ))}
            </div>
          </div>
        ))}
        {scene.choices && scene.choices.map((choice, idx) => (
          <button key={idx} onClick={() => onChoice(choice.nextScene)} className="scene-choice-btn">
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Scene;
