import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from "./Affairs.module.css"

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filterValue: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.setFilter('all'); // need to fix
    const setHigh = () => props.setFilter('high');
    const setMiddle = () => props.setFilter('middle');
    const setLow = () => props.setFilter('low');

    // const buttonClassName = props.setFilter === 'high'
    //     ? s.red
    //     : props.setFilter===setMiddle
    //         ? s.orange
    //         : props.setFilter===setLow
    //             ? s.green
    //             : s.gray


    const allClassName = `${s.gray} ${s.filterBtn} `;
    const highClassName = `${s.red} ${s.filterBtn} `;
    const middleClassName = `${s.orange} ${s.filterBtn} `;
    const lowClassName = `${s.green} ${s.filterBtn} `;


    return (
        <div>
            {mappedAffairs}
            <button className={allClassName} onClick={setAll}>All</button>
            <button className={highClassName} onClick={setHigh}>High</button>
            <button className={middleClassName} onClick={setMiddle}>Middle</button>
            <button className={lowClassName} onClick={setLow}>Low</button>
        </div>
    );
}

export default Affairs;
