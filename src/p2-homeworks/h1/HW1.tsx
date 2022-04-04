import React from "react";
import Message from "./Message";

export type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

const messageData: MessageDataType = {
    avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
    name: "Victoria",
    message: "Hello! How are you?",
    time: "22:00",
};

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                message={messageData.message}
                name={messageData.name}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    );
}

export default HW1;
