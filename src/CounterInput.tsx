import React, { ChangeEvent } from "react";

type IputType = {
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>)=>void
  maxValue: number 
  startValue: number
}
export const CounterInput = (props: IputType) => {
  return (
    <div>
      <input type="number" value={props.value} onChange={props.onChange} className={props.value < 0 || props.startValue >= props.maxValue ? 'error' : ''}/>
    </div>
  )
}