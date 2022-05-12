import React from 'react'

import {PATH} from "./Pages";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={s.header}>
            <div className={s.slideContainer}>
                <div className={s.slide}>
                    <div className={s.slideContent}></div>
                    <NavLink to={PATH.PRE_JUNIOR}  className={({isActive}) => isActive ? s.active : s.link } >Pre-junior</NavLink>
                    <NavLink to={PATH.JUNIOR}  className={({isActive}) => isActive ? s.active : s.link }>Junior</NavLink>
                    <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.active : s.link } >Junior+</NavLink>
                </div>

            </div>

        </div>
    )
}

export default Header
