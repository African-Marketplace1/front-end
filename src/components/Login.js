import React,{useState} from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValues={
    username:'',
    password:''
}
const Login =()=> {
    const [formValues, setFormValues]= useState(initialValues)
    const {push} = useHistory()

    const handleChange= e => {
        setFormValues ({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit= e => {
        e.preventDefault()
        axiosWithAuth()
            .post("https://africanmarketplace-1.herokuapp.com/users/login", formValues)
            .then(res=> {
                localStorage.setItem('token', res.data.token)
                push("https://africanmarketplace-1.herokuapp.com/categories") //redirect 
            })
            .catch(err => {
                console.log(err)
            })
    }
    return(
        <div>
            <h1>Login</h1>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">username:</label>
                    <input 
                        name="username"
                        id="username"
                        value={formValues.username}
                        onChange={handleChange}/>
                    <label htmlFor="password">password:</label>
                    <input 
                        id="password"
                        type="password"
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}/>
                    <button>submit</button>
                </form>
            </div>
        </div>
    )
}
export default Login