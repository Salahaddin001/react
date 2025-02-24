import { useState } from "react";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Нажми меня</button>
      <p>Количество кликов: {count}</p>
    </div>
  );
};

export default ClickCounter;
