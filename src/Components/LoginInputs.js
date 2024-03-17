import { Box, Button, ButtonBase, Stack, Typography } from "@mui/material";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import { theme } from "../Theme";
import { PasswordInput } from "./PasswordInput";
import { UsernameInput } from "./UsernameInput";
import { getOtp, isPhoneNumberBeingTyped } from "./Utils/login";

export default function LoginInputs({ username, setUsername, password,
    setPassword, setAuthMode, setShowOtpScreen, setIsProgressing,
    getOtpResponse, setGetOtpResponse }) {

    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('get-otp-btn', {
            'size': 'invisible',
            "callback": () => { }
        });
    }, []);

    return <Stack direction="column" spacing={theme.spacing(2)} alignItems={"center"}>
        <UsernameInput username={username} setUsername={setUsername} error={getOtpResponse} setError={setGetOtpResponse} />

        {!isPhoneNumberBeingTyped(username) && <PasswordInput password={password} setPassword={setPassword} />}

        <Button id="get-otp-btn" sx={{ width: "100%" }} variant="contained" onClick={async () => {
            if (isPhoneNumberBeingTyped(username)) {
                if (username.length !== 10) {
                    setGetOtpResponse(new Error("Please type a valid Phone Number"));
                    return;
                }

                setIsProgressing(true)
                let confirmationResult = await getOtp(username);
                if (!(confirmationResult instanceof Error)) {
                    setShowOtpScreen(true);
                    window.otpVerificationId = confirmationResult.verificationId;
                }
                setIsProgressing(false)
            }
        }}>
            {isPhoneNumberBeingTyped(username) ? "Get OTP" : "Login"}
        </Button>

        <Box>
            <ButtonBase sx={{ display: "block", py: 0.2, px: 1, borderRadius: 2 }} onClick={() => setAuthMode("signup")}>
                <Typography color="primary.main" fontWeight={500} fontSize={14}>
                    Create an account?
                </Typography>
            </ButtonBase>
        </Box>
    </Stack>
}