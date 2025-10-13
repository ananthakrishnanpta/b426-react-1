import React from "react";
import UserCard from "../components/UserCard";
const users = [
    { id: 1, username: "alice", age: 25 },
    { id: 2, username: "bob", age: 30 },
    { id: 3, username: "charlie", age: 22 },
    { id: 4, username: "diana", age: 28 },
    { id: 5, username: "eric", age: 35 }
];

const Home = () => {

    return (
    <div className='container row'>

        {
            users.map(user => (
                <UserCard user={user} key={user.id} />
            ))
        }
    </div>
    )
}

export default Home;