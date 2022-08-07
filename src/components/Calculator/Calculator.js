import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [number, setNumber] = useState('');
  const [answer, setAnswer] = useState(null);

  const handleButtonClick = (e) => {
    setNumber(number + e.target.innerText);
  };

  const handleCalculate = () => {
    const fibSequenceMap = {};

    for (let i = 1; i <= parseInt(number); i++) {
      if (i === 1) {
        fibSequenceMap[0] = 0;
      } else if (i === 2) {
        fibSequenceMap[1] = 1;
      } else {
        fibSequenceMap[2] = parseInt(fibSequenceMap[0]) + parseInt(fibSequenceMap[1]);
        fibSequenceMap[0] = fibSequenceMap[1];
        fibSequenceMap[1] = fibSequenceMap[2];
      }
    }

    setAnswer(fibSequenceMap[2]);
  };

  const handleAllClear = () => {
    setNumber('');
    setAnswer('');
  };

  return (
    <div className="calculator-container">
      <div className="input">{answer || number || ''}</div>
      <div className="button" onClick={handleButtonClick}>
        1
      </div>
      <div className="button" onClick={handleButtonClick}>
        2
      </div>
      <div className="button" onClick={handleButtonClick}>
        3
      </div>
      <div className="button" onClick={handleButtonClick}>
        4
      </div>
      <div className="button" onClick={handleButtonClick}>
        5
      </div>
      <div className="button" onClick={handleButtonClick}>
        6
      </div>
      <div className="button" onClick={handleButtonClick}>
        7
      </div>
      <div className="button" onClick={handleButtonClick}>
        8
      </div>
      <div className="button" onClick={handleButtonClick}>
        9
      </div>
      <div className="button" onClick={handleButtonClick}>
        0
      </div>
      <div className="button" onClick={handleAllClear}>
        AC
      </div>
      <div className="button" onClick={handleCalculate}>
        =
      </div>
    </div>
  );
}
