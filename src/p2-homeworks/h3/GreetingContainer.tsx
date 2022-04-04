import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import Greeting, {GreetingPropsType} from "./Greeting";
import {UserType} from "./HW3";
import {v1} from "uuid";

export type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (_id: string, name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string | null>(null); // need to fix any

    let totalUsers =  users.length; // need to fix

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setError(null)
        setName(e.currentTarget.value)    // need to fix
    };

    const addUser = () => {
        const trimmedName = name.trim()  //обрезает пробелы в начале и конце строки
        if (trimmedName) {
            alert(`Hello,  ${name}  !`)
            addUserCallback(v1(), trimmedName)
        } else {
            setError("Name is required")
        }
        setName("")
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser()
        }
    };


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
