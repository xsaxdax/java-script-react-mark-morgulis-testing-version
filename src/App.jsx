import { useState, useCallback } from "react";
import { Layout } from "./components/Layout";
import { ExpressionInput } from "./components/ExpressionInput";
import { Results } from "./components/Results";
import Calculation from "./logic/calculation";

export const App = () => {
  const [result, setResult] = useState("");

  const calculateResult = useCallback(
    (input) => {
      setResult(new Calculation(input).calculate() ?? "Wrong input!");
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
