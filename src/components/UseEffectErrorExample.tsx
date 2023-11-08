import { useEffect } from "react";

const ErrorExample = () => {
  useEffect(() => {
    throw new Error("useEffect Error");
  }, []);
  return (
    <div>
      <h1>My Component</h1>
    </div>
  );
};

export default ErrorExample;
