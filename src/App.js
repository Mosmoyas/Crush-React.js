import "./main.css";
import { UserCard } from "./components/user"
import { UserForm } from "./components/user"

import Container from "./components/layout/Container";
import { useState } from "react";
// const names = 
const App = () => {

    const [names, setName] = useState([
        { id: 1, name: "Mostafa", address: "Cairo", phone: "01634056160", gender: "male" },
        { id: 2, name: "Melanie", address: "Hennef", phone: "01734056160", gender: "female" },
        { id: 3, name: "Amer", address: "Fankfurt", phone: "01634052160", gender: "male" }]
    ); const deleteHandler = (id) => {
        // const restItems = names.filter((el) => el.id !== id)// that changes nothing in UI

        //SetName(setState ) will chane the UI Content when an item will be deleted and it is async
        setName((prevState) => prevState.filter((el) => el.id !== id));//Async
        //setName(([...names.filter((el) => el.id !== id)]));//Async


        console.log(names);

    }
    // Rule says: do not mutate the State directly
    const namesloops = names.map((el) =>
        <UserCard{...el} key={el.id} deleteHandler={deleteHandler}
        />

    );
    const insertHandler = (data) => {
        setName([...names, data])
        console.log("added Successfully...")
    };
    return (
        <>
            <UserForm insertHandler={insertHandler} />
            <Container>{namesloops}</Container>

        </>

    );
};

export default App;