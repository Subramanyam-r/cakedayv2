import { Avatar, Button, Card, Container, Divider, IconButton, Stack, Typography } from "@mui/material"
import { CelebrationRounded } from "@mui/icons-material"
import { theme } from "../Theme"
import GoogleIcon from '@mui/icons-material/Google';
import { PasswordInput } from "../Components/PasswordInput";
import { useState } from "react";
import { UsernameInput } from "../Components/UsernameInput";

function Home() {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    return <div>

        <Container sx={{display: "flex", flexDirection: "column", alignItems: "center", height: "100vh"}}>
            <Card elevation={2} sx={{ width: "19rem", p: theme.spacing(5), my: "auto"}}>

                <Stack direction={"column"} spacing={theme.spacing(2)} alignItems={"center"}>
                    <Avatar size="large" sx={{ bgcolor: "primary.main", mb: theme.spacing(1), width: theme.spacing(5), height: theme.spacing(5) }}>
                        <CelebrationRounded />
                    </Avatar>

                    <Typography variant="h5">
                        Sign In
                    </Typography>

                    <UsernameInput username={username} setUsername={setUsername} />

                    <PasswordInput password={password} setPassword={setPassword} />

                    <Typography sx={{alignSelf: "flex-start", mb: "1rem"}}  color="primary.main" fontWeight={500} fontSize={14}>
                        Forgot Password?
                    </Typography>

                    <Button sx={{width: "100%"}} variant="contained">
                        Sign In
                    </Button>

                    <Divider sx={{width: "100%"}}>
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