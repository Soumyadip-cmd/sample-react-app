import StyledThreadView from "./pages/StyledThreadView";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Login";
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App: React.FC = () => {
    const [loggedin, setloggedin] = useState(false);
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/thread/styled"
                            element={
                                <StyledThreadView loggedin={loggedin} changeAuthState={() => setloggedin(false)} />
                            }
                        />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/" element={<SignIn changeAuthState={() => setloggedin(true)} />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
