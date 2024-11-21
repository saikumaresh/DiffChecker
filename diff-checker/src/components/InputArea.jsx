import React from "react";

function InputArea({ label, value, onChange }) {
  return (
    <div className="input-area">
      <h2>{label}</h2>
      <textarea
        rows="10"
        cols="40"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputArea;
