import { Pin } from "@mui/icons-material";
import { FormControl, FormHelperText, Icon, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { useState } from "react";
import { theme } from "../Theme";


export default function OTPInput({ otp, setotp, otpError, setOtpError }) {
    const [isFocused, setIsFocused] = useState(false);

    return <FormControl error={otpError !== null} sx={{ width: theme.auth.spacing.inputFieldWidth, textAlign: "center" }} variant="outlined">

        <InputLabel htmlFor="password-ip">OTP</InputLabel>

        <OutlinedInput inputProps={{ style: { textAlign: "center", letterSpacing: 15 } }} id="password-ip" label={"OTP"}
            type={"text"}
            startAdornment={<InputAdornment position="start" sx={{ mr: theme.spacing(1) }}>
                <Icon color={isFocused ? "primary" : ""}>
                    <Pin />
                </Icon>
            </InputAdornment>}
            onChange={(e) => {
                if (e.target.value.length <= 6) setotp(e.target.value)
                if (e.target.value.length === 6) document.getElementById("otp-verify-btn").focus();
                setOtpError(null)
            }}
            value={otp}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />

        {otpError !== null && <FormHelperText id="otp-helper-text">{otpError}</FormHelperText>}

    </FormControl>
}