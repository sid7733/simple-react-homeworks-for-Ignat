import React, {useState} from "react";
import GreetingContainer, {GreetingContainerPropsType} from "./GreetingContainer";


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    let [users, setUsers] = useState<Array<UserType>>([]); // need to fix any

    const addUserCallback = (_id: string, name: string) => { // need to fix any
        const newUser: UserType = {
            _id: _id,
            name: name
        }

        setUsers([newUser, ...users]); // need to fix
    }

    return (
        <div>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
