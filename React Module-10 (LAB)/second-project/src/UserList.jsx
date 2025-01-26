// Create a list of users where each user has a unique id. Render the user list using
// React and assign a unique key to each user.
import React from 'react'

const UserList = () => {
    const users = [
        { id: 1, name: "test" },
        { id: 2, name: "Tops" },
        { id: 3, name: "America" },
        { id: 4, name: "India" },
        { id: 5, name: "Ahmedabad" },
    ];

    return (
        <div>
            <h1 >User List</h1>
            
            <ul>
                {
                    users.map((i)=>{
                        return(
                            <li key={i.id}>{i.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default UserList;



