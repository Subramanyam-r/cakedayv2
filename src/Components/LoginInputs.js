import { Box, Button, ButtonBase, Stack, Typography } from "@mui/material";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import { theme } from "../Theme";
import { PasswordInput } from "./PasswordInput";
import { UsernameInput } from "./UsernameInput";
import { getOtp, isPhoneNumberBeingTyped, signInWithEmail } from "./Utils/login";
import { useSelector, useDispatch } from "react-redux"
import authSlice from "../Redux/AuthSlice/authSlice";

export default function LoginInputs() {

        let dispatch = useDispatch();
        let { username, password, getOtpResponse } = useSelector((state) => state.auth);
        let { setUsername, setPassword, setGetOtpResponse, setAuthMode, setShowOtpScreen, setIsProgressing, setResendTimeout } = authSlice.actions;

    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('get-otp-btn', {
            'size': 'invisible',
            "callback": () => { }
        });
    }, []);
    
    let recaptchaDiv = document.querySelector(".grecaptcha-badge");
    if(recaptchaDiv)
        recaptchaDiv.parentElement.style.position = "absolute";

    return <Stack direction="column" spacing={theme.spacing(2)} alignItems={"center"}>
        <UsernameInput username={username} setUsername={(username) => dispatch(setUsername(username))} 
        error={isPhoneNumberBeingTyped(username) ? getOtpResponse : null} 
        setError={(getOtpResponse) => dispatch(setGetOtpResponse(getOtpResponse))} />

        {!isPhoneNumberBeingTyped(username) && 
            <PasswordInput password={password} setPassword={(password) => dispatch(setPassword(password))}
            error={isPhoneNumberBeingTyped(username) ? null : getOtpResponse}
            setError={(getOtpResponse) => dispatch(setGetOtpResponse(getOtpResponse))} />}

        <Button id="get-otp-btn" sx={{ width: "100%" }} variant="contained" onClick={async () => {
            dispatch(setIsProgressing(true))
            if (isPhoneNumberBeingTyped(username)) {
                if (username.length !== 10) {
                    dispatch(setGetOtpResponse("Please type a valid Phone Number"));
                } else {
                    let confirmationResult = await getOtp(username);
                    if (!(confirmationResult instanceof Error)) {
                        dispatch(setShowOtpScreen(true));
                        window.otpVerificationId = confirmationResult.verificationId;
                        dispatch(setResendTimeout(60));
                    } else {
                        dispatch(setGetOtpResponse(confirmationResult.message))
                    }
                }

            } else {
                let user = await signInWithEmail(username, password);
                if (user instanceof Error) {
                    dispatch(setGetOtpResponse(user.message))
                }
                console.log(user)
            }
            dispatch(setIsProgressing(false))
        }}>
            {isPhoneNumberBeingTyped(username) ? "Get OTP" : "Login"}
        </Button>

        <Box>
            <ButtonBase sx={{ display: "block", py: 0.2, px: 1, borderRadius: 2 }} onClick={() => dispatch(setAuthMode("signup"))}>
                <Typography color="primary.main" fontWeight={500} fontSize={14}>
                    Create an account?
                </Typography>
            </ButtonBase>
        </Box>
    </Stack>
}