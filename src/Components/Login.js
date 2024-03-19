import { CelebrationRounded } from "@mui/icons-material";
import { Avatar, Box, Slide, Stack, Typography } from "@mui/material";
import { theme } from "../Theme";
import LoginInputs from "./LoginInputs";
import OTPInputs from "./OTPInputs";
import { useSelector } from "react-redux";

function Login() {

    let showOtpScreen = useSelector((state) => state.auth.showOtpScreen);

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
                    <LoginInputs />
                </Box>
            </Slide>

            <Slide direction="left" in={showOtpScreen} mountOnEnter unmountOnExit >
                <Box position={showOtpScreen ? "initial" : "absolute"}>
                    <OTPInputs />
                </Box>
            </Slide>
        </Stack>


    </Stack>
}

export default Login;