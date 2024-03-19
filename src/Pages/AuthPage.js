import GoogleIcon from '@mui/icons-material/Google';
import { Box, Card, Container, Divider, IconButton, LinearProgress, Slide, Stack, Typography } from "@mui/material";
import Login from "../Components/Login";
import { SignUp } from "../Components/SignUp";
import { theme } from "../Theme";
import { useSelector } from "react-redux";
import store from '../Redux/Store';
import { useEffect } from 'react';

function AuthPage() {

    let { authMode, isProgressing } = useSelector(state => state.auth);
    
    useEffect(() => {
        store.subscribe(() => console.log(store.getState()));
    }, []);

    return <div>

        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
            <Card elevation={2} sx={{ width: "19rem", p: theme.spacing(5), my: "auto", position: "relative" }}>
                {isProgressing && <LinearProgress sx={{ width: "100%", position: "absolute", top: 0, left: 0 }} />}

                <Stack direction={"column"} spacing={theme.spacing(2)}
                    alignItems={"center"} sx={isProgressing ? { opacity: 0.4, pointerEvents: "none" } : {}}>

                    <Stack direction={"row"}>
                        <Slide direction={"right"} in={authMode === "login"} mountOnEnter unmountOnExit>
                            <Box position={authMode !== "login" ? "Absolute" : "initial"}>
                                <Login />
                            </Box>
                        </Slide>

                        <Slide direction="left" in={authMode === "signup"} mountOnEnter unmountOnExit >
                            <Box position={authMode !== "signup" ? "Absolute" : "initial"}>
                                <SignUp />
                            </Box>
                        </Slide>
                    </Stack>

                    <Divider sx={{ width: "100%" }}>
                        <Typography color={"greyed.main"} >
                            OR
                        </Typography>
                    </Divider>

                    <Stack direction={"row"} spacing={theme.spacing(1)}>
                        <IconButton size="large"> <GoogleIcon /> </IconButton>
                    </Stack>
                </Stack>
            </Card>
        </Container>
    </div>
}

export default AuthPage