import React, { useState, useEffect } from "react";
import init, { evaluate } from "../calculator/pkg/calculator";
const Calculator: React.FC = () => {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    init().then(() => console.log("WASM Initialized"));
  }, []);

  const handleCalculate = () => {
    try {
      setResult(evaluate(expression));
    } catch (error) {
      setResult("Invalid expression");
    }
  };

  return (
    <div className="calculator-container">
      <h2>Rust Calculator</h2>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        className="calculator-input"
      />
      <button onClick={handleCalculate} className="calculate-button">Calculate</button>
      <p className="calculator-result">Result: {result}</p>
    </div>
  );
};

export default Calculator;
