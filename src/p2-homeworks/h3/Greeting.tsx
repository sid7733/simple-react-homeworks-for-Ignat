import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import {UserType} from "./HW3";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

export type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void// need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input; // need to fix with (?:)

    const buttonClass =`${s.skewBtn} ${s.purple}`

    return (
        <div className ={s.container}>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
            />
            <span>{error}</span>
            <button onClick={addUser} className={buttonClass} >add</button>
            <span>{totalUsers}</span>
        </div>
    );
}

export default Greeting;
