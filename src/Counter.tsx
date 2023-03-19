import React from "react";
import { Button } from "./Button";
import { DisplayCounter } from "./DisplayCounter";

type CounterType = {
  maxValue: number
  value: number
  onClickPlus: ()=>void
  onClickReset: ()=>void
  disabled: boolean
  error: boolean
};

export const Counter = (props: CounterType) => {
  

  return (
    <div className="main">
      <div className="numBlock">
        <h3><DisplayCounter disabled={props.disabled} error={props.error} value={props.value} maxValue={props.maxValue}/></h3>
      </div>
      <div className="buttons">
        <Button title={"inc"} 
                onClickChange={props.onClickPlus} 
                value={props.value === props.maxValue }/>
        <Button title={"reset"} 
                onClickChange={props.onClickReset} 
                value={props.value === 0}/>
      </div>
    </div>
  );
};
