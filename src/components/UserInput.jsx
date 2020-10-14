import React, { Component } from 'react'
import UserCard from './UserCard'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import UserView from './UserView'
export default class UserInput extends Component {
    state ={
        userId: '',
        userList: []
    }
    getUser  = async ()=> {
        const response = await fetch(`https://api.github.com/users/${this.state.userId}`)
        const userInfo = await response.json()
        return userInfo
    }

    _handleChange = async (newUser) => {
        this.setState ({
            userId: newUser
        })
    }
    _handleClick = async ()=>{
        const newUser = await this.getUser()
        const newList = [...this.state.userList, newUser]
        this.setState({
            userList: newList,
            userId: ''
        })
        console.log(this.state.userList)
    }
    _handleKeyPress = async(event)=>{
        console.log(event.charCode)
        if(event.charCode === 13){
            const newUser = await this.getUser()
            const newList = [...this.state.userList, newUser]
            this.setState({
                userList: newList,
                userId: ''
            })
        }
    }
    
    render () {
        return (
            <Router>
                <Link to="/">List</Link>
                <Route exact path="/">
                    <form>
                        <label>User ID:
                            <input onChange={event=>this._handleChange(event.target.value)} type="text" value={this.state.userId}></input>
                        </label>
                        <button onKeyPress={event=>this._handleKeyPress(event.target.value)} onClick={this._handleClick} type="button">Add User</button>
                    </form>
                
                <ul>
                    {this.state.userList.map(user => {
                    return <li key={user.id}><UserCard user={user}/></li>
                })}
                </ul>
                </Route>
                <Route path='/user/:id'>
                    <UserView users={this.state.userList}/>
                </Route>
            </Router>
        )
    }
}