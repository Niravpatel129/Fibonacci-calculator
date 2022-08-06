import React, { useState } from 'react';
import './Calculator.css';

export default function Calculator() {
  const [number, setNumber] = useState('');
  const [answer, setAnswer] = useState(null);

  const handleButtonClick = (e) => {
    setNumber(number + e.target.innerText);
  };

  const handleCalculate = (e) => {
    const fibSequenceMap = {};

    for (let i = 1; i <= parseInt(number); i++) {
      if (i === 1) {
        fibSequenceMap[i] = 0;
      } else if (i === 2) {
        fibSequenceMap[i] = 1;
      } else {
        fibSequenceMap[i] = parseInt(fibSequenceMap[i - 1]) + parseInt(fibSequenceMap[i - 2]);
      }
    }

    setAnswer(fibSequenceMap[parseInt(number)]);
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
