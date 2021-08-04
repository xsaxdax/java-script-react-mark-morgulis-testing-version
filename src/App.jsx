import { useState, useCallback } from "react";
import { Layout } from "./components/Layout";
import { ExpressionInput } from "./components/ExpressionInput";
import { Results } from "./components/Results";
import Calculation from "./logic/calculation";

export const App = () => {
  const [result, setResult] = useState("");

  const calculateResult = useCallback(
    (input) => {
      setResult(new Calculation(input).calculate() ?? "Wrong input!"); //The nullish coalescing operator (??) is a logical operator 
      //that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
    },
    [setResult]
  );

  return (
    <Layout>
      <ExpressionInput handleSubmit={calculateResult} />
      <Results content={result} />
    </Layout>
  );
};

