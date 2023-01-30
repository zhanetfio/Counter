import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'

type SettingPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (max: number) => void
    setStartValue: (start: number) => void
    set: () => void


}

const Settings = (props: SettingPropsType) => {
        const {maxValue, startValue, setMaxValue, setStartValue, set} = props

        const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const res = +e.target.value
            if (res > startValue) {
                setMaxValue(res)
            }
        }

        const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const res = +e.target.value;
            if(res>=0) {
                setStartValue(+e.target.value)
            }
        }

        const saveSetHandler = (): void => {
            setStartValue(startValue)
            setMaxValue(maxValue)
        }
        return (
            <div className={s.settingsBlock}>
                <div className={s.dataSet}>Max Value:
                    <input
                        className={s.dataBox}
                        type='number'
                        value={maxValue}
                        onChange={onChangeMaxHandler}
                    />
                </div>
                <div className={s.dataSet}>Start Value:
                    <input
                        className={s.dataBox}
                        type='number'
                        value={startValue}
                        onChange={onChangeStartHandler}
                    />
                </div>
                <div>
                    <button className={s.btn} onClick={saveSetHandler}>Save
                    </button>
                    <button className={s.btn} onClick={(e) => set()}>Close
                    </button>
                </div>
            </div>

        );
    }
;

export default Settings;