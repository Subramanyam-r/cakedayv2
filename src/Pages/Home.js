import { Box, Button, Card, Container, Divider, IconButton, Slide, Stack, Typography } from "@mui/material"
import { theme } from "../Theme"
import GoogleIcon from '@mui/icons-material/Google';
import Login from "../Components/Login";
import { useState } from "react";

function Home() {
    const [authMode, setAuthMode] = useState("login");

    return <div>

        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh" }}>
            <Card elevation={2} sx={{ width: "19rem", p: theme.spacing(5), my: "auto" }}>

                <Stack direction={"column"} spacing={theme.spacing(2)} alignItems={"center"}>
                    <Slide direction={"right"} in={authMode === "login"} mountOnEnter unmountOnExit>
                        <Box>
                            <Login setAuthMode={setAuthMode} />
                        </Box>
                    </Slide>

                    <Slide direction="left" in={authMode === "signup"} mountOnEnter unmountOnExit>
                        <Box>
                            SIGNUP FORM
                            <Button onClick={() => setAuthMode("login")}>LOGIN</Button>
                        </Box>
                    </Slide>

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

export default Home