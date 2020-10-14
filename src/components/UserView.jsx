import React, {useEffect, useState} from 'react'
import {Container, Card, Title} from 'bloomer'
import {useParams} from 'react-router-dom'
import 'bulma/css/bulma.css'




const UserView =  (props) => {
    const {id} = useParams()
    let theUserId;
    for (let i = 0; i < props.users.length; i++){
        if (Number(id)=== props.users[i].id){
            theUserId = i;
        }
    }
    const url = `https://api.github.com/users/${props.users[theUserId].login}/repos`
    const getRepos = async (url)=>{
        const response = await fetch (url)
        const repos = await response.json()
        return repos
    }
    const [repos, setRepos] = useState([]);
    useEffect(()=>  {
        (async function () {
        const repos = await getRepos(url)
        setRepos(repos)
        })();
    }, [setRepos, url])

    console.log(repos)
    return (

        <Container>
            <Card>
                <Title >{props.users[theUserId].login}</Title>
                <ul>
                    {!!repos.length ? repos.map(repo=>{
                        return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
                    })
                    :(
                        <p>No Repos For This User</p>
                    )}
                </ul>
            </Card>
        </Container>
    )
}

export default UserView