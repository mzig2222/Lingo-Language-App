import React from 'react';

function Dialogue({ dialogue, onChoice }) {
  if (!dialogue) return null;
  return (
    <div>
      {dialogue.map((d, i) => (
        <div key={i}>
          <strong>{d.speaker}:</strong> {d.text}
          <div style={{ marginTop: 20 }}>
            {d.responses && d.responses.map((resp, idx) => (
              <button key={idx} onClick={() => onChoice(resp.nextScene)} style={{ margin: 5 }}>
                {resp.text}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dialogue;
