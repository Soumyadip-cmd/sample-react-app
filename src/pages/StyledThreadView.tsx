import BasicPostList from "../components/BasicPostList";
import CreateModal from "../components/TestCreate";
import LogoutFunc from "../components/Logout";
import { Box, Button, Card, CardContent, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import "./StyledThread.css";

interface StyledThreadViewProps {
    loggedin: boolean;
    changeAuthState: () => void;
}

const StyledThreadView: React.FC<StyledThreadViewProps> = ({ loggedin, changeAuthState }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    const [cat, setCat] = useState("main");

    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleClickCreate = () => {
        setOpenCreateModal(true);
    };

    return (
        <div className="page">
            <Box className="navbar">
                <AppBar position="relative">
                    <Toolbar className="toolBar">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                            <MenuItem
                                onClick={() => {
                                    setCat("main");
                                    setAnchorEl(null);
                                }}
                            >
                                All posts
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setCat("Java");
                                    setAnchorEl(null);
                                }}
                            >
                                Java
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setCat("Python");
                                    setAnchorEl(null);
                                }}
                            >
                                Python
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setCat("Javascript");
                                    setAnchorEl(null);
                                }}
                            >
                                Javascript
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setCat("Golang");
                                    setAnchorEl(null);
                                }}
                            >
                                Golang
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setCat("Rust");
                                    setAnchorEl(null);
                                }}
                            >
                                Rust
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setCat("Kotlin");
                                    setAnchorEl(null);
                                }}
                            >
                                Kotlin
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setCat("Swift");
                                    setAnchorEl(null);
                                }}
                            >
                                Swift
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setCat("C#");
                                    setAnchorEl(null);
                                }}
                            >
                                C#
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setCat("C++");
                                    setAnchorEl(null);
                                }}
                            >
                                C++
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    setCat("SQL");
                                    setAnchorEl(null);
                                }}
                            >
                                SQL
                            </MenuItem>
                        </Menu>
                        <Typography variant="h6" component="div" className="display">
                            {"Forumhub"}
                        </Typography>
                        <Box className="buttons">
                            <Button color="inherit" onClick={handleClickCreate}>
                                {loggedin ? "Create new" : null}
                            </Button>
                            <LogoutFunc loggedin={loggedin} changeAuthState={changeAuthState} />
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div className="threadList">
                <CreateModal open={openCreateModal} closeModal={() => setOpenCreateModal(false)} />
                <Card>
                    <CardContent>
                        <Typography component="p">{"Viewing thread:"}</Typography>
                        <Typography variant="h5" component="h5">
                            {cat === "main" ? "All Posts" : cat}
                        </Typography>
                    </CardContent>
                </Card>

                <BasicPostList styled={true} category={cat} />
            </div>
        </div>
    );
};

export default StyledThreadView;
