import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";

interface LogoutFuncProps {
    loggedin: boolean;
    changeAuthState : () => void
}

const LogoutFunc: React.FC<LogoutFuncProps> = ({loggedin, changeAuthState}) => {
    

    const navigate = useNavigate();

    const logoutUser = () => {
        axios
            .post("http://localhost:8000/logout", {}, {withCredentials: true})
            .then((response) => {
                console.log(response.data.success);
                changeAuthState();
                navigate("/");
            })
            .catch((error) => console.log(error.response));
    };

    const redirectToLogin = () => {
        navigate("/")
    }

    const redirectToSignUp = () => {
        navigate("/signup");
    }

    return loggedin 
        ? (<Button color="inherit" onClick={logoutUser}>Logout</Button>) 
        : (
            <div>
                <Button color="inherit" onClick={redirectToLogin}>Login</Button>
                <Button color="inherit" onClick={redirectToSignUp}>SignUp</Button>
            </div>
        )
}

export default LogoutFunc;