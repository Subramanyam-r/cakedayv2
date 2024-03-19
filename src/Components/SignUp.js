import { Avatar, Box, Button, ButtonBase, Stack, TextField, Typography } from "@mui/material"
import { theme } from "../Theme"
import { CelebrationRounded } from "@mui/icons-material"
import { PasswordInput } from "./PasswordInput"
import { UsernameInput } from "./UsernameInput"
import { useSelector, useDispatch } from "react-redux"
import authSlice from "../Redux/AuthSlice/authSlice"

function SignUp() {

    let dispatch = useDispatch();
    let { username, password, retypePassword, getOtpResponse } = useSelector(state => state.auth);
    let { setUsername, setPassword, setRetypePassword, setAuthMode, setGetOtpResponse } = authSlice.actions;

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

        <UsernameInput username={username} 
        setUsername={(username) => dispatch(setUsername(username))}
        setError={err => dispatch(setGetOtpResponse(err))} />

        <PasswordInput password={password} 
        setPassword={password => dispatch(setPassword(password))}
        setError={err => dispatch(setGetOtpResponse(err))} />

        <PasswordInput label="Retype Password" password={retypePassword} 
        setPassword={password => dispatch(setRetypePassword(password))}
        error={getOtpResponse}
        setError={err => dispatch(setGetOtpResponse(err))} />

        <Button sx={{ width: "100%" }} variant="contained">
            SIGN UP
        </Button>

        <Box>
            <ButtonBase sx={{display: "block", py: 0.2, px: 1, borderRadius: 2}} onClick={() => dispatch(setAuthMode("login"))}>
                <Typography color="primary.main" fontWeight={500} fontSize={14}>
                    Already have an account?
                </Typography>
            </ButtonBase>
        </Box>
    </Stack>
}

export { SignUp }