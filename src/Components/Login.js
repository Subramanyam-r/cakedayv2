import { CelebrationRounded } from "@mui/icons-material";
import { Avatar, Box, Slide, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { theme } from "../Theme";
import LoginInputs from "./LoginInputs";
import OTPInputs from "./OTPInputs";

function Login({ setAuthMode, setIsProgressing }) {
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [showOtpScreen, setShowOtpScreen] = useState(false);
    const [getOtpResponse, setGetOtpResponse] = useState(false);

    console.log(getOtpResponse)

    return <Stack direction="column" spacing={theme.spacing(2)} alignItems={"center"}>
        <Stack sx={{ p: 1 }} direction={"column"} spacing={theme.spacing(1)} alignItems={"center"}>
            <Avatar fontSize="large" sx={{ bgcolor: "primary.main", width: theme.spacing(5), height: theme.spacing(5) }}>
                <CelebrationRounded fontSize="inherit" />
            </Avatar>

            <Typography variant="h5">
                Login
            </Typography>
        </Stack>

        <Stack direction={"row"}>
            <Slide direction={"right"} in={!showOtpScreen} mountOnEnter unmountOnExit>
                <Box position={!showOtpScreen ? "initial" : "absolute"}>
                    <LoginInputs username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                        setAuthMode={setAuthMode}
                        setShowOtpScreen={setShowOtpScreen}
                        setIsProgressing={setIsProgressing}
                        getOtpResponse={getOtpResponse}
                        setGetOtpResponse={setGetOtpResponse} />
                </Box>
            </Slide>

            <Slide direction="left" in={showOtpScreen} mountOnEnter unmountOnExit >
                <Box position={showOtpScreen ? "initial" : "absolute"}>
                    <OTPInputs
                        phoneNumber={username}
                        setShowOtpScreen={setShowOtpScreen}
                        getOtpResponse={getOtpResponse}
                        setGetOtpResponse={setGetOtpResponse}
                        setIsProgressing={setIsProgressing} />
                </Box>
            </Slide>
        </Stack>


    </Stack>
}

export default Login;