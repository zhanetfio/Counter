import React, {useEffect, useState} from 'react';
import './App.css';
import Settings from "./Settings";
import Counter from "./Counter";

function App() {

    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(1)
    const [settings, setSettings] = useState(false)



    const setOnHandler = () => {
        setSettings(true)
    }
    const setOffHandler = () => {
        setSettings(false)
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
    }, [startValue])

    // useEffect(() => {
    //     let valueAsString = localStorage.getItem('currentValue')
    //     if (valueAsString) {
    //         let newValue = JSON.parse(valueAsString)
    //         setValue(newValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('currentValue', JSON.stringify(startValue))
    // }, [startValue])

    return (
        <div className="App">
            {settings ?
                <Settings
                    maxValue={maxValue}
                    startValue={startValue}
                    setMaxValue={setMaxValue}
                    setStartValue={setStartValue}
                    set={setOffHandler}

                />
                :
                <Counter
                    value={startValue}
                     settings={setOnHandler}
                    maxValue={maxValue}

                />
            }


        </div>
    );
}

export default App;
