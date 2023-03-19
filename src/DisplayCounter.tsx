import React from "react";

type DisplayCounterType = {
  disabled: boolean
  error: boolean
  value: number
  maxValue: number
}
export const DisplayCounter = (props: DisplayCounterType) => {
  if (props.disabled) {
    return <div className="red">Incorrect value</div>
  } else if (props.error) {
    return <div>Set Value</div>
  } else {
    return <div className={props.value === props.maxValue ? 'red' : ''}>{props.value}</div>
  }
}