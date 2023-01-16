import React, {useEffect, useState} from 'react';
import './App.css';
import Setting from "./Setting";
import Counter from "./Counter";

function App() {
    const defaultStart: number = 0;
    const defaultMax: number = 0;
    const [value, setValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(defaultMax)
    const [startValue, setStartValue] = useState<number>(defaultStart)

    const incValue = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }
    const resetValue = () => {
        setValue(startValue)
    }


    useEffect(() => {
        let valueAsString = localStorage.getItem('MaxValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setMaxValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('MaxValue', JSON.stringify(maxValue))
    }, [maxValue])


    useEffect(() => {
        let valueAsString = localStorage.getItem('StartValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setStartValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('StartValue', JSON.stringify(startValue))
    },  [startValue])


    useEffect(() => {
        let valueAsString = localStorage.getItem('currentValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('currentValue', JSON.stringify(startValue))
    }, [startValue])

    return (
        <div className="App">
            <Counter
                value={startValue}
                incValue={incValue}
                resetValue={resetValue}
            />
            <Setting

                maxValue={maxValue}
                startValue={startValue}
                setMaxValue={setMaxValue}
                setStartValue={setStartValue}

            />
        </div>
    );
}

export default App;
