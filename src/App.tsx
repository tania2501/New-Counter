import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { CounterSettings } from "./CounterSettings";

function App() {
  const onClickPlus = () => {
    const numPlus = num + 1;
    setNum(numPlus);
  };
  const getFromLS1 = (): number => {
    const getMaxValue = localStorage.getItem("maxCounterValue");
    if (getMaxValue) {
      return JSON.parse(getMaxValue);
    } else return 0;
  };
  const getFromLS2 = (): number => {
    const startNum = localStorage.getItem("startValue");
    if (startNum) {
      return JSON.parse(startNum);
    } else return 0;
  };
  const [max, setMax] = useState<number>(getFromLS1);
  const [start, setStart] = useState<number>(getFromLS2);
  const [num, setNum] = useState(start);

  const onClickReset = () => {
    setNum(start);
  };

  const disabledValue = start < 0 || max < 0 || start > max || start === max;
  const [error, setError] = useState<boolean>(false);

  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    let newMaxValue = Number(e.currentTarget.value);
    setMax(newMaxValue);
    setError(true);
  };
  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    let newStartValue = Number(e.currentTarget.value);
    setStart(newStartValue);
    setError(true);
  };

  const addValue = () => {
    localStorage.setItem("maxCounterValue", JSON.stringify(max));
    localStorage.setItem("startValue", JSON.stringify(start));
    const getMaxValue = localStorage.getItem("maxCounterValue");
    setMax(Number(getMaxValue));
    let startNum = localStorage.getItem("startValue");
    setNum(Number(startNum));
    setError(false);
  };
  return (
    <div className="App">
      <CounterSettings
        maxValue={max}
        startValue={start}
        onChangeMaxValue={onChangeMaxValue}
        onChangeStartValue={onChangeStartValue}
        addValue={addValue}
        disabled={disabledValue}
      />
      <Counter
        maxValue={max}
        value={num}
        onClickPlus={onClickPlus}
        onClickReset={onClickReset}
        disabled={disabledValue}
        error={error}
      />
    </div>
  );
}

export default App;
