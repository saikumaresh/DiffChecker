import React, { useState } from "react";
import InputArea from "./components/InputArea";
import DiffOutput from "./components/DiffOutput";
import { diffChecker } from "./logic/diffChecker";

function App() {
  const [codeA, setCodeA] = useState("");
  const [codeB, setCodeB] = useState("");
  const [diff, setDiff] = useState([]);

  const handleCompare = () => {
    const differences = diffChecker(codeA.split("\n"), codeB.split("\n"));
    setDiff(differences);
  };

  return (
    <div className="app">
      <h1>Code Diff Checker</h1>
      <div className="input-area">
        <InputArea label="Code Snippet A" value={codeA} onChange={setCodeA} />
        <InputArea label="Code Snippet B" value={codeB} onChange={setCodeB} />
      </div>
      <button onClick={handleCompare}>Compare</button>
      <DiffOutput diff={diff} />
    </div>
  );
}

export default App;
