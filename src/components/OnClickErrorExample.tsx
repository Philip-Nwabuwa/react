import { useEffect, useState } from "react";

const OnClickErrorExample = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    if (count === 2) {
      throw new Error("OnClick Error with useEffect & useState");
    }
  });
  return (
    <div className="flex my-4">
      <p className="mr-3">{count}</p>
      <button onClick={onClick}>increment number</button>
    </div>
  );
};

export default OnClickErrorExample;
