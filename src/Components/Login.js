import { CelebrationRounded } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonBase, Stack, Typography } from "@mui/material";
import { UsernameInput } from "./UsernameInput";
import { PasswordInput } from "./PasswordInput";
import { theme } from "../Theme";
import { useState } from "react";

function Login({ setAuthMode }) {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    return <Stack direction="column" spacing={theme.spacing(2)} alignItems={"center"}>
        <Stack sx={{p: 1}} direction={"column"} spacing={theme.spacing(1)} alignItems={"center"}>
            <Avatar fontSize="large" sx={{ bgcolor: "primary.main", width: theme.spacing(5), height: theme.spacing(5) }}>
                <CelebrationRounded fontSize="inherit" />
            </Avatar>

            <Typography variant="h5">
                Login
            </Typography>
        </Stack>

        <UsernameInput username={username} setUsername={setUsername} />

        <PasswordInput password={password} setPassword={setPassword} />

        <Button sx={{ width: "100%" }} variant="contained">
            Sign In
        </Button>

        <Box>
            <ButtonBase sx={{display: "block", py: 0.2, px: 1, borderRadius: 2}} onClick={() => setAuthMode("signup")}>
                <Typography color="primary.main" fontWeight={500} fontSize={14}>
                    Create an account?
                </Typography>
            </ButtonBase>
        </Box>
    </Stack>
}

export default Login;