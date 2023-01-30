import React, { useState} from 'react';
import s from './Counter.module.css';

type CounterType = {
    value: number
    maxValue:number
    settings:()=>void
}

const Counter = (props: CounterType) => {
    const [value, setValue] = useState<number>(props.value)

    const incValue = () => {
        if(value!==props.maxValue) {
            setValue(value + 1)
        }
    }

    const resetValue = () => {
        setValue(props.value)
    }

    return (
        <div className={s.counterBlock}>
            <div className={s.displayBlock}>{value}</div>
            <div>
                <button className={s.btn} onClick={incValue} disabled={value===props.maxValue}>Inc</button>
                <button className={s.btn} onClick={resetValue}>Reset</button>
                <button className={s.btn} onClick={props.settings}>Settings</button>
            </div>

        </div>
    );
};

export default Counter;