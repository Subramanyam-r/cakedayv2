import { Fingerprint, Visibility, VisibilityOff } from "@mui/icons-material";
import { FormControl, Icon, IconButton, InputAdornment, InputLabel, OutlinedInput, FormHelperText } from "@mui/material";
import { useState } from "react";
import { theme } from "../Theme";

export function PasswordInput({ password, setPassword, label, error = null, setError }) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    return <FormControl error={error !== null} sx={{ width: "100%", }} variant="outlined">

        <InputLabel htmlFor="password-ip">{label || "Password"}</InputLabel>

        <OutlinedInput id="password-ip" label={label || "Password"}
            type={isPasswordVisible ? "text" : "password"}
            startAdornment={<InputAdornment position="start" sx={{ mr: theme.spacing(1) }}>
                <Icon color={isFocused ? "primary" : ""}>
                    <Fingerprint />
                </Icon>
            </InputAdornment>}
            endAdornment={<InputAdornment position="end">
                <IconButton onClick={() => setIsPasswordVisible((prev) => !prev)}>
                    {isPasswordVisible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>}
            onChange={(e) => {
                setPassword(e.target.value);
                setError(null);
            }}
            value={password}
            hidden={isPasswordVisible}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
        />

        {error && <FormHelperText id="my-helper-text">{error.split(".")[0].replaceAll("Firebase: ", "")}</FormHelperText>}

    </FormControl>
}