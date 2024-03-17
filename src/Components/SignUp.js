import { Avatar, Box, Button, ButtonBase, Stack, TextField, Typography } from "@mui/material"
import { theme } from "../Theme"
import { CelebrationRounded } from "@mui/icons-material"
import { PasswordInput } from "./PasswordInput"
import { UsernameInput } from "./UsernameInput"
import { useState } from "react"

function SignUp({ setAuthMode }) {
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [username, setUsername] = useState("");

    return <Stack display={"flex"} width="100%" direction="column" spacing={theme.spacing(2)} alignItems={"center"}>
        <Stack sx={{p: 1}} direction={"column"} spacing={theme.spacing(1)} alignItems={"center"}>
            <Avatar fontSize="large" sx={{ bgcolor: "primary.main", width: theme.spacing(5), height: theme.spacing(5) }}>
                <CelebrationRounded fontSize="inherit" />
            </Avatar>

            <Typography variant="h5">
                Sign Up
            </Typography>
        </Stack>

        <TextField fullWidth label="Name" />
        <UsernameInput username={username} setUsername={setUsername} />
        <PasswordInput password={password} setPassword={setPassword} />
        <PasswordInput label="Retype Password" password={retypePassword} setPassword={setRetypePassword} />

        <Button sx={{ width: "100%" }} variant="contained">
            SIGN UP
        </Button>

        <Box>
            <ButtonBase sx={{display: "block", py: 0.2, px: 1, borderRadius: 2}} onClick={() => setAuthMode("login")}>
                <Typography color="primary.main" fontWeight={500} fontSize={14}>
                    Already have an account?
                </Typography>
            </ButtonBase>
        </Box>
    </Stack>
}

export { SignUp }