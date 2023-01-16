import React from 'react';

type CounterType = {
    value: number
    incValue: () => void
    resetValue: () => void
}

const Counter = (props: CounterType) => {
    return (
        <div>
            <div>{props.value}</div>
            <div>
                <button  onClick={props.incValue}>Inc</button>
                <button onClick={props.resetValue}>Reset</button>
            </div>

        </div>
    );
};

export default Counter;