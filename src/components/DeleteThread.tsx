import { API_URL } from "../config";
import Thread from "../types/Thread";
import React from "react";
import axios from "axios";
import { Button } from "@mui/material";

interface DeleteFuncProps {
    thread: Thread;
}

const DeleteFunc: React.FC<DeleteFuncProps> = ({ thread }) => {
    const deleteUser = () => {
        if (window.confirm("Are you sure you want to delete this post??") == true) {
            axios
                .delete(`${API_URL}/${thread.ID}`, { withCredentials: true })
                .then((response) => {
                    console.log(response.data.success);
                })
                .catch((error) => {
                    console.log(error.response);
                    if (error.response?.status === 401) {
                        alert("You are not logged in.");
                    } else if (error.response?.status === 409) {
                        alert("You cannot delete this post");
                    }
                });
        } else {
            console.log("You canceled!");
        }
    };

    return <Button onClick={deleteUser}>Delete</Button>;
};

export default DeleteFunc;
