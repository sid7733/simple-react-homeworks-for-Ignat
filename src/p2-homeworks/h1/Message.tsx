import React from "react";
import {MessageDataType} from "./HW1";
import s from "./Message.module.css"

// type MessagePropsType = {
//     messageData: MessageDataType
// }

function Message(props: MessageDataType) {
    return (
        <div className={s.container}>
            <div>
                <img src={props.avatar} alt="" className={s.ava}/>
            </div>
            <div className={s.messageItem}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.message}>
                    {props.message}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>

    );
}

export default Message;