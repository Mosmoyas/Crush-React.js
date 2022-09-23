import "./main.css";
import { UserCard } from "./components/user"
import Container from "./components/layout/Container";
import { useState } from "react";
// const names = 
const App = () => {

    const [names, setName] = useState([
        { id: 1, name: "Mostafa", address: "Cairo", phone: "01634056160", gender: "male" },
        { id: 2, name: "Melanie", address: "Hennef", phone: "01734056160", gender: "female" },
        { id: 3, name: "Amer", address: "Fankfurt", phone: "01634052160", gender: "male" }]
    ); const deleteAction = (id) => {
        console.log("deleteAction", id);

    }
    const namesloops = names.map((el) =>
        <UserCard{...el} key={el.id} deleteAction={deleteAction}
        />

    );
    // UserCard(deleteAction);
    return (
        <>
            <Container>{namesloops}</Container>

        </>

    );
};

export default App;