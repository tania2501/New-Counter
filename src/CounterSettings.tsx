import React, { ChangeEvent} from "react";
import { Button } from "./Button";
import { CounterInput } from "./CounterInput";

type CounterSettingsType = {
  setNum: (num: number)=>void
  maxValue: number
  startValue: number
  onChangeMaxValue: (e: ChangeEvent<HTMLInputElement>)=>void
  onChangeStartValue: (e: ChangeEvent<HTMLInputElement>)=>void
  addValue: ()=>void
  disabled: boolean
}

export const CounterSettings = (props: CounterSettingsType) => {
  
  return (
    <div className="main">
      <div className="numBlock">
        <div className="input">
          <span>max value:</span> 
          <CounterInput value={props.maxValue} onChange={props.onChangeMaxValue} />
        </div>
        <div className="input">
          <span>start value:</span>
          <CounterInput value={props.startValue} onChange={props.onChangeStartValue} />
        </div>
      </div>
      <div className="buttons">
        <Button title="set" onClickChange={props.addValue} value={props.disabled}/>
      </div>
    </div>
  );
};
