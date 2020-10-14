import React from 'react'
import {Container, Card, Title} from 'bloomer'
import {useParams} from 'react-router-dom'
import 'bulma/css/bulma.css'
import Repos from './Repos'



const UserView =  (props) => {
    
    const {id} = useParams()
    let theUserId;
    
    for (let i = 0; i < props.users.length; i++){
        if (Number(id)=== props.users[i].id){
            theUserId = i;
        }
    }
    return (

        <Container>
            <Card>
                <Title >{props.users[theUserId].login}</Title>
                <ul>
                    <Repos userId={props.users[theUserId].login}/>
                </ul>
            </Card>
        </Container>
    )
}

export default UserView