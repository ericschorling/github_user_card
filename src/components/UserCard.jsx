import React from 'react'
import {Link} from 'react-router-dom'

const UserCard = (props) => {
    return (
        <>
            <p>{props.user.name}</p>
            <Link to={`/user/${props.user.id}`}>
                <img alt={props.user.name} src={props.user.avatar_url}/>
            </Link>
            c
        </>
    )
}

export default UserCard