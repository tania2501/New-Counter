import React, { ChangeEvent} from "react";
import "./App.css";
import { Counter } from "./Counter";
import { CounterSettings } from "./CounterSettings";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "./store-redux/store";
import { addValueAC, onChangeMaxValueAC, onChangeStartValueAC, onClickPlusAC, onClickResetAC, setErrorAC } from "./store-redux/counter-reducer";

function AppWithRedux() {

  const dispatch = useDispatch()

  const num = useSelector<AppRootState, number>((state)=> state.num)
  const max = useSelector<AppRootState, number>((state)=> state.max)
  const start = useSelector<AppRootState, number>((state)=> state.start)
  const error  = useSelector<AppRootState, boolean>((state)=> state.error)

  const onClickPlus = () => {
    dispatch(onClickPlusAC())
  };
  const onClickReset = () => {
    dispatch(onClickResetAC())
  };

  const disabledValue = start < 0 || max < 0 || start > max || start === max;
  
  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setErrorAC(true))
    dispatch(onChangeMaxValueAC(e))
  };
  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setErrorAC(true))
    dispatch(onChangeStartValueAC(e))
    
  };

  const addValue = () => {
    dispatch(addValueAC())
    dispatch(setErrorAC(false))
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

export default AppWithRedux;
