import React, { Component } from 'react'; 
import fire from './config/fire'; 

class Login extends Component {
    constructor(props) {
        super(props); 
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this); 
        this.state = {
            email: "", 
            password: ""
        } 
    }

    login(e) {
        e.preventDefault(); 
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log(u); 
            }).catch((err) => {
                console.log(err); 
             })
    }

    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                console.log(u);
            }).catch((err) => {
                console.log(err); 
            })
    }

    handleChange(e) {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="email" id="email" placeholder="Enter your email address" onChange={this.handleChange} value={this.state.email} name="email" style={{ marginRight: "5px", borderRadius: "5px", fontSize: "14px" }} />
                    <input type="password" id="password" placeholder="Enter your password" onChange={this.handleChange} value={this.state.password} name="password" style={{ marginRight: "5px", borderRadius: "5px", fontSize: "14px" }} />
                    <button onClick={this.login} style={{ borderRadius: "5px", backgroundColor: "green", color: "white"}}>Login</button>
                    <button onClick={this.signup} style={{ borderRadius: "5px", backgroundColor: "green", color: "white"}}>Signup</button>
                </form>
            </div>
        )
    }

}

export default Login; 








// JavaScript source code
