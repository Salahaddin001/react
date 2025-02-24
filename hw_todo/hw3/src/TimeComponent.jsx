import { useState, useEffect } from "react";

const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <p>Текущее время: {currentTime}</p>
    </div>
  );
};

export default TimeComponent;
