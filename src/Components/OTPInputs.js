import { Box, Button, ButtonBase, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import firebase from "firebase/compat/app";
import { useEffect } from "react";
import { theme } from "../Theme";
import OTPInput from "./OTPInput";
import { getOtp } from "./Utils/login";
import authSlice from "../Redux/AuthSlice/authSlice";
import { useSelector, useDispatch } from "react-redux";
import store from "../Redux/Store"

function formatSecondsToHHMM(seconds) {
    let mins = String(Math.floor(seconds / 60));
    if (mins.length < 2) mins = "0" + mins;
    let secs = String(seconds % 60);
    if (secs.length < 2) secs = "0" + secs;
    return `${mins}:${secs}`
}

export default function OTPInputs() {

    let dispatch = useDispatch();
    let { otp, getOtpResponse, username: phoneNumber, otpError, resendTimeout } = useSelector((state) => state.auth);
    let { setOtp, setShowOtpScreen, setIsProgressing, setResendTimeout, setOtpError } = authSlice.actions;

    useEffect(() => {
        const intervalId = setInterval(() => {
            let currentTimeLeft = store.getState().auth.resendTimeout;
            if(currentTimeLeft > 0)
                dispatch(setResendTimeout(currentTimeLeft - 1));
        }, 1000);

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('otp-verify-btn', {
            'size': 'invisible',
            "callback": () => { }
        });

        return () => clearInterval(intervalId);
    }, [dispatch, setResendTimeout]);


    return <Stack direction="column" spacing={theme.spacing(2)} alignItems={"center"}>

        <Typography color={green[500]} fontSize={14}>
            OTP has been sent to <strong>+91 {phoneNumber.slice(0, 5)} {phoneNumber.slice(5)}</strong>
        </Typography>

        <OTPInput otp={otp} setotp={(otp) => dispatch(setOtp(otp))} 
        otpError={otpError} setOtpError={otpError => dispatch(setOtpError(otpError))} />

        <Box width="100%">
            <Button id="otp-verify-btn" sx={{ width: "100%", mb: theme.spacing(1) }} variant="contained"
                onClick={async () => {
                    if(otp.length < 6) {
                        dispatch(setOtpError("Please enter a valid 6-digit code."));
                        return;
                    }
                    try {
                        dispatch(setIsProgressing(true))
                        console.log(getOtpResponse)
                        let credential = firebase.auth.PhoneAuthProvider.credential(window.otpVerificationId, otp);
                        let userCredential = await firebase.auth().signInWithCredential(credential);
                        console.log(userCredential)
                        dispatch(setIsProgressing(false));
                    } catch (err) {
                        console.log(err)
                        dispatch(setOtpError("Invalid Code!"))
                        dispatch(setIsProgressing(false));
                    }
                }}>
                VERIFY
            </Button>

            <Button disabled={resendTimeout !== 0} id="otp-resent-btn" sx={{ width: "100%" }} variant="outlined"
                onClick={async () => {
                    dispatch(setIsProgressing(true))
                    let confirmationResult = await getOtp(phoneNumber);
                    if (!(confirmationResult instanceof Error)) {
                        window.otpVerificationId = confirmationResult.verificationId;
                    } else {
                        dispatch(setOtpError("Error while resending the code! Please contact admin"))
                    }
                    dispatch(setResendTimeout(60));
                    dispatch(setIsProgressing(false));
                }}>
                RESEND CODE {resendTimeout !== 0 && "IN " + formatSecondsToHHMM(resendTimeout)}
            </Button>

        </Box>

        <Box>
            <ButtonBase sx={{ display: "block", py: 0.2, px: 1, borderRadius: 2 }} onClick={() => dispatch(setShowOtpScreen(false))}>
                <Typography color="primary.main" fontWeight={500} fontSize={14}>
                    Use a different number?
                </Typography>
            </ButtonBase>
        </Box>
    </Stack>
}