import React, {ChangeEvent} from 'react';


type SettingPropsType = {
    maxValue: number
    startValue: number
    setMaxValue: (max: number) => void
    setStartValue: (start: number) => void

}

const Setting = (props: SettingPropsType) => {

        const onChangeMaxHandler=(e:ChangeEvent<HTMLInputElement>)=>{
            const res=e.target.value;
            props.setMaxValue(Number(res))
            console.log(res)
        }

    const onChangeStartHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        const res=e.target.value;
        props.setStartValue(Number(res))
        }
        
        const settingHandler = (): void => {
          props.setStartValue(props.startValue)
            props.setMaxValue(props.maxValue)
        }
return (
    <div>
        <div>Max Value:
            <input
                type='number'
                value={props.maxValue}
                onChange={onChangeMaxHandler}
            />
        </div>
        <div>Start Value:
            <input
                type='number'
                value={props.startValue}
                onChange={onChangeStartHandler}

            />
        </div>
        <div>
            <button onClick={settingHandler}>Setting
            </button>
        </div>
    </div>

);
}
;

export default Setting;