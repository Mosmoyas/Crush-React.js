import React from "react";
import styles from "../UserCard/userCard.module.css"

const UserCard = ({ id, name, ...info }) => {
    //...info is a spread as a group of unkown keys
    // console.log(info)
    const { userCard, delBtn } = styles;
    const deleteBtn = (id) => {
        info.deleteHandler(id)
        // console.log(id)
    }
    return (
        <>
            <div className={userCard}>
                <ul>
                    <li><span>ID: </span>{id}</li>
                    <li><span>Name: </span>{name}</li>
                    <li><span>Address: </span>{info.address}</li>
                    <li><span>Phone: </span>{info.phone}</li>
                    <li><span>Gender: </span> {info.gender}</li>

                </ul>
                <div className={delBtn} onClick={() => deleteBtn(id)}>x</div>
            </div>

        </>);
}

export default UserCard;