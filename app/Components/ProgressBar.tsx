import React, { useEffect, useState } from "react";
import style from "./Styles/ProgressBar.module.css"

interface ProgressBarProps {
  duration: number;
  selectedIdx: number;
  idx: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ duration, selectedIdx, idx }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let startTime: number;
    let elapsedTime: number;

    if (selectedIdx === idx) {
      startTime = Date.now();
      interval = setInterval(() => {
        elapsedTime = Date.now() - (startTime || 0);
        setProgress((elapsedTime / duration) * 100);

        if (elapsedTime >= duration) {
          clearInterval(interval);
        }
      }, 50);
    }
    return () => {
      clearInterval(interval);
    };
  }, [selectedIdx, idx, duration]);

  useEffect(() => {
    setProgress(0);
  }, [selectedIdx]);

  return (
    <div className={style.progressbar}>
      <div className={style.progress} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;