import { Box, Button, ButtonBase, Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { theme } from "../Theme";
import OTPInput from "./OTPInput";
import { getOtp } from "./Utils/login";

function formatSecondsToHHMM(seconds) {
    let mins = String(Math.floor(seconds / 60));
    if (mins.length < 2) mins = "0" + mins;
    let secs = String(seconds % 60);
    if (secs.length < 2) secs = "0" + secs;
    return `${mins}:${secs}`
}

export default function OTPInputs({ setShowOtpScreen, getOtpResponse, setGetOtpResponse, setIsProgressing, phoneNumber }) {
    let [otpError, setOtpError] = useState(null);
    const [resendTimeout, setResendTimeout] = useState(5);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setResendTimeout((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0)); // Decrement timer by 1 second
        }, 1000);

        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('otp-verify-btn', {
            'size': 'invisible',
            "callback": () => { }
        });

        return () => clearInterval(intervalId);
    }, []);

    const [otp, setotp] = useState("");

    return <Stack direction="column" spacing={theme.spacing(2)} alignItems={"center"}>

        <Typography color={green[500]} fontSize={14}>
            OTP has been sent to <strong>+91 {phoneNumber.slice(0, 5)} {phoneNumber.slice(5)}</strong>
        </Typography>

        <OTPInput otp={otp} setotp={setotp} otpError={otpError} setOtpError={setOtpError} />

        <Box width="100%">
            <Button id="otp-verify-btn" sx={{ width: "100%", mb: theme.spacing(1) }} variant="contained"
                onClick={async () => {
                    try {
                        setIsProgressing(true)
                        console.log(getOtpResponse)
                        let credential = firebase.auth.PhoneAuthProvider.credential(window.otpVerificationId, otp);
                        let userCredential = await firebase.auth().signInWithCredential(credential);
                        console.log(userCredential)
                        setIsProgressing(false);
                    } catch (err) {
                        console.log(err)
                        setOtpError("Invalid Code!")
                        setIsProgressing(false);
                    }
                }}>
                VERIFY
            </Button>

            <Button disabled={resendTimeout !== 0} id="otp-resent-btn" sx={{ width: "100%" }} variant="outlined"
                onClick={async () => {
                    setIsProgressing(true)
                    let confirmationResult = await getOtp(phoneNumber);
                    if (!(confirmationResult instanceof Error)) {
                        window.otpVerificationId = confirmationResult.verificationId;
                    }
                    setIsProgressing(false)
                }}>
                RESEND CODE {resendTimeout !== 0 && "IN " + formatSecondsToHHMM(resendTimeout)}
            </Button>

        </Box>

        <Box>
            <ButtonBase sx={{ display: "block", py: 0.2, px: 1, borderRadius: 2 }} onClick={() => setShowOtpScreen(false)}>
                <Typography color="primary.main" fontWeight={500} fontSize={14}>
                    Use a different number?
                </Typography>
            </ButtonBase>
        </Box>
    </Stack>
}