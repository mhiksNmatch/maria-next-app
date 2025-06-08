'use client';
import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [auto, setAuto] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (auto) {
      interval = setInterval(() => setCount((c) => c + step), 1000);
    }
    return () => clearInterval(interval);
  }, [auto, step]);

  return (
    <div className="card">
      <h2>Interactive Counter</h2>
      <p><strong>Count:</strong> {count}</p>
      <div className="btn-row">
        <button className="btn decrement" onClick={() => setCount(count - step)}>Decrease</button>
        <button className="btn increment" onClick={() => setCount(count + step)}>Increase</button>
      </div>
      <div className="btn-row">
        <button className="btn auto" onClick={() => setAuto(!auto)}>
          {auto ? 'Stop Auto' : 'Start Auto'}
        </button>
        <button className="btn reset" onClick={() => { setCount(0); setAuto(false); }}>Reset</button>
      </div>
      <p>Step Size:</p>
      <div className="step-row">
        {[1, 2, 5, 10, 20].map(s => (
          <button key={s} className={`step-btn ${step === s ? 'active' : ''}`} onClick={() => setStep(s)}>
            {s}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Counter;
