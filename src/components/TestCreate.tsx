import { API_URL } from "../config";
import { Button, InputLabel, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { SyntheticEvent, useState } from "react";
import "./Modal.css";

interface CreateModalProps {
    open: boolean;
    closeModal: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ open, closeModal }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");

    const storeUser = async (event: SyntheticEvent) => {
        event.preventDefault();

        axios
            .post(`${API_URL}`, { category, title, content }, { withCredentials: true })
            .then((response) => {
                console.log(response.data.success);
            })
            .catch((error) => {
                console.log(error);
                if (error.response?.status === 401) {
                    alert("You are not logged in");
                } else if (error.response?.status === 400) {
                    alert("Could not create post");
                }
            });
        closeModal();
    };

    return (
        <div>
            <Modal open={open} onClose={closeModal}>
                <div className="modal">
                    <Typography variant="h6" component="div" className="modal-title">
                        Create a new thread
                    </Typography>
                    <div className="modal-form">
                        <div>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={category}
                                label="Age"
                                onChange={(e) => setCategory(e.target.value)}
                                className="modal-input"
                            >
                                <MenuItem value={"Java"}>Java</MenuItem>
                                <MenuItem value={"Python"}>Python</MenuItem>
                                <MenuItem value={"Javascript"}>Javascript</MenuItem>
                                <MenuItem value={"Golang"}>Golang</MenuItem>
                                <MenuItem value={"Rust"}>Rust</MenuItem>
                                <MenuItem value={"Kotlin"}>Kotlin</MenuItem>
                                <MenuItem value={"Swift"}>Swift</MenuItem>
                                <MenuItem value={"C#"}>C#</MenuItem>
                                <MenuItem value={"C++"}>C++</MenuItem>
                                <MenuItem value={"SQL"}>SQL</MenuItem>
                            </Select>
                        </div>
                        <div>
                            <TextField
                                margin="normal"
                                required
                                id="title"
                                label="Title"
                                name="title"
                                multiline
                                onChange={(e) => setTitle(e.target.value)}
                                className="modal-input"
                            />
                        </div>
                        <div>
                            <TextField
                                margin="normal"
                                required
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
                                Create
                            </Button>
                            <Button onClick={closeModal}>Cancel</Button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default CreateModal;
