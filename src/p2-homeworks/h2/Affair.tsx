import React from "react";
import {AffairPriorityType, AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType// need to fix any
    deleteAffairCallback: (affairId: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    debugger
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };// need to fix

    const priorityClassName = props.affair.priority === 'high'
        ? s.high
        : props.affair.priority === 'middle'
            ? s.middle
            : props.affair.priority === 'low'
                ? s.low
                : s.all


    const buttonClassName = `${s.closeBtn} ${s.gray}`;

    return (
        <div className={s.container}>
        <div className={priorityClassName}>
            {props.affair.name}
            <button onClick={deleteCallback} className={buttonClassName}>X</button>
        </div>
        </div>
    );
}

export default Affair;
