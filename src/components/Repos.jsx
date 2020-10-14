import React, {Component} from 'react'


const getRepos = async (userId) =>{
    const response = await fetch (`https://api.github.com/users/${userId}/repos`)
    const data = await response.json()
    return data
}

export default class Repos extends Component {
    state = {
        repos: []
    }
    
    async componentDidMount (){
        const repos = await getRepos(this.props.userId)
        console.log(repos)
        this.setState({
            repos: repos
        })
    }
    
    render () { 
        return (
           <>
           {/* <p>{this.state.repos[0].id}</p> */}
                {this.state.repos.map(repo=>{
                    return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
                })}
           </> 
        )
    }
}