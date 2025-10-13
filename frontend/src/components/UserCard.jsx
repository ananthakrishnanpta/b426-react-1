import React from "react";
import './UserCard.css';

function UserCard({user}){
    return (
        <div className='card col-12 col-sm-6 col-md-4 col-lg-3'>
          <h2 className='card-text'>
            {user.id} - {user.username}
          </h2>
        </div>
    )
}

export default UserCard;