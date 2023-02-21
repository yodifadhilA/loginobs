import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [auth, setAuth] = useState({
        "username": "",
        "password": ""
    });
    const [error, setError] = useState({
        error: false,
        message: ""
    });

    useEffect(() => {

        if(localStorage.getItem("user"))
        {
            navigate("/", { replace: true });
        }

    }, []);

    const onLogin = () => {
        if(auth.username === "testing" && auth.password === "testing_password")
        {
            localStorage.setItem("user", auth.username);

            navigate("/", { replace: true });
        }
        else 
        {
            setError({error: true, message: "Username / Password Salah"});
        }
    }

    return (
        <div style={{width: "100%", height: "100vh"}}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <div style={{padding: "40px 10px", border: "1px solid black", width: "50%", textAlign: "center"}}>
                    <h1>OBS REACTJS TEST</h1>
                </div>
                {
                    error ? 
                        <div style={{display: "flex", flexDirection: "column", marginTop: 20}}>
                            <label style={{fontWeight: "bold", textAlign: "center", color: "red", fontSize: 20}}>{error.message}</label>
                        </div> 
                    : 
                    <></>
                }
                <div style={{display: "flex", flexDirection: "column", marginTop: 20}}>
                    <input type="text" onChange={(e) => setAuth({...auth, username: e.target.value})} placeholder="User ID" style={{borderRadius: 20, padding: 20, fontSize: 18, fontWeight: "bold", width: 300}}></input>
                </div>  
                <div style={{display: "flex", flexDirection: "column", marginTop: 20}}>
                    <input type="password" onChange={(e) => setAuth({...auth, password: e.target.value})} placeholder="Passsword" style={{borderRadius: 20, padding: 20, fontSize: 18, fontWeight: "bold", width: 300}}></input>
                </div> 
                <div style={{display: "flex", flexDirection: "column", marginTop: 50}}>
                    <button style={{padding: 15, borderRadius: 20, width: 250, background: "#000080", color: "#ffffff"}} onClick={onLogin}>Sign In</button>
                </div>
                <div style={{display: "flex", flexDirection: "column", marginTop: 20}}>
                    <a href="#">Forgot My Password</a>
                </div> 
            </div>
        </div>  
    )
}

export default Login