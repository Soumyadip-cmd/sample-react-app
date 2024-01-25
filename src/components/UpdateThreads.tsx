import { API_URL } from "../config";
import Thread from "../types/Thread";
import { Button, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import "./Modal.css";

interface UpdateModalProps {
    thread: Thread;
    open: boolean;
    closeModal: () => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ thread, open, closeModal }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const storeUser = async (event: SyntheticEvent) => {
        event.preventDefault();

        axios
            .patch(`${API_URL}/${thread.ID}`, { title, content }, { withCredentials: true })
            .then((response) => {
                console.log(response.data.success);
            })
            .catch((error) => {
                console.log(error);
                if (error.response?.status === 401) {
                    alert("You are not logged in");
                } else if (error.response?.status === 409) {
                    alert("You are not allowed to update");
                }
            });
        closeModal();
    };

    return (
        <div>
            <Modal open={open} onClose={closeModal}>
                <div className="modal">
                    <Typography variant="h6" component="div" className="modal-title">
                        Input your update
                    </Typography>
                    <div className="modal-form">
                        <div>
                            <TextField
                                margin="normal"
                                id="title"
                                label="Title"
                                name="title"
                                multiline
                                onChange={(e) => setTitle(e.target.value)}
                                className="modal-input"
                            />
                        </div>
                        <div style={{ paddingTop: "15px" }}>
                            <TextField
                                margin="normal"
                                id="content"
                                label="Content"
                                name="content"
                                multiline
                                rows="7"
                                onChange={(e) => setContent(e.target.value)}
                                className="modal-input"
                            />
                        </div>
                        <div className="modal-button">
                            <Button onClick={storeUser} variant="contained" color="primary">
                                Update
                            </Button>
                            <Button onClick={closeModal}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default UpdateModal;
