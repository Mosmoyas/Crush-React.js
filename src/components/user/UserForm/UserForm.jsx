import React from "react";
import MyStyles from "../UserForm/userForm.module.css"
import { useState } from "react"
import { useRef } from 'react';


function UserForm({ insertHandler }) {

    const name = useRef(null);
    const address = useRef(null);
    const phone = useRef(null);
    const gender = useRef(null);



    const [input, setInput] = useState({
        id: "",
        name: "",
        address: "",
        phone: "",
        gender: ""

    });
    const inputHandler = (evnt) => {//Setstate
        const inputItem = evnt.target.name;
        const valueItem = evnt.target.value;

        // setInput((prevState) => ({ ...prevState, [inputItem]: valueItem }));//Async // [inputItem]> because it is dynamic 
        setInput({ ...input, [inputItem]: valueItem });//Async // [inputItem]> because it is dynamic 

        console.log(valueItem, " --", inputItem)
    }
    const fromHandler = (evnt) => {
        evnt.preventDefault();
        // input.id = Date.now()
        // insertHandler(input){/**SetStae */}
        insertHandler({// UseRef

            id: Date.now(),
            name: name.current.value,
            phone: phone.current.value,
            address: address.current.value,
            gender: gender.current.value,
        });


        name.current.value = null;
        phone.current.value = null;
        address.current.value = null;
        gender.current.value = null;
    }
    return (
        <form className={MyStyles.form} onSubmit={fromHandler}>

            <div>
                <label htmlFor="name">Name:</label>
                {/* <input type="text" name="name" id="name" value={input.name} onChange={inputHandler} />***=>>>> SetState */}
                <input type="text" name="name" id="name" ref={name} />{/*UseRef */}

            </div>
            <div>
                <label htmlFor="address">Address:</label>
                {/* <input type="text" name="address" id="address" value={input.address} onChange={inputHandler} /> */}
                <input type="text" name="address" id="address" ref={address} />

            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                {/* <input type="text" name="phone" id="phone" value={input.phone} onChange={inputHandler} /> */}
                <input type="text" name="phone" id="phone" ref={phone} />

            </div>
            <div>
                <label htmlFor="gender">Gender:</label>
                {/* <input type="text" name="gender" id="gender" value={input.gender} onChange={inputHandler} /> */}
                <input type="text" name="gender" id="gender" ref={gender} />

            </div>
            <input type="submit" />
        </form>
    )
}

export default UserForm