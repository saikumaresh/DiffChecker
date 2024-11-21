import React from "react";

function DiffOutput({ diff }) {
  return (
    <div className="diff-output">
      <h2>Diff Output</h2>
      <pre>
        {diff.map((line, index) => (
          <div
            key={index}
            style={{
              color: line.startsWith("-") ? "red" : line.startsWith("+") ? "green" : "black",
            }}
          >
            {line}
          </div>
        ))}
      </pre>
    </div>
  );
}

export default DiffOutput;
