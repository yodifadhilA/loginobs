import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

    const navigate = useNavigate();

    useEffect(() => {

        if(!localStorage.getItem("user"))
        {
            navigate("/login", { replace: true });
        }
    }, []);

    return (
        <div style={{width: "100%", height: "100vh"}}>
            <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <div style={{padding: "40px 10px", border: "1px solid black", width: "50%", textAlign: "center"}}>
                    <h1>OBS REACTJS TEST</h1>
                </div>
                <div style={{padding: "40px 10px", border: "1px solid black", width: "50%", textAlign: "center", marginTop: 40}}>
                    <h1>Welcome {localStorage.getItem("user")}</h1>
                </div>
            </div>
        </div>  
    )
}

export default Welcome