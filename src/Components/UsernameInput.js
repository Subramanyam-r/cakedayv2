import { AccountCircle, Phone } from "@mui/icons-material";
import { FormControl, FormHelperText, Icon, InputAdornment, InputLabel, OutlinedInput, useTheme } from "@mui/material";
import { useState } from "react";
import { isPhoneNumberBeingTyped } from "./Utils/login";

function renderUsernameLabel(username) {
    if (username === "") return "Email / Phone"

    if (isPhoneNumberBeingTyped(username)) return "Phone"
    else return "Email"
}

export function UsernameInput({ username, setUsername, error, setError }) {
    const theme = useTheme();

    const [isFocused, setIsFocused] = useState(false)
    return <FormControl error={error !== false}
        sx={{ width: theme.auth.spacing.inputFieldWidth }} variant="outlined">

        <InputLabel htmlFor="username-ip">{renderUsernameLabel(username)}</InputLabel>

        <OutlinedInput id="username-ip" label={renderUsernameLabel(username)}
            startAdornment={<InputAdornment position="start" sx={{ mr: theme.spacing(1) }}>
                <Icon color={isFocused ? "primary" : ""}>
                    {isPhoneNumberBeingTyped(username) ? <Phone /> : <AccountCircle />}
                </Icon>
            </InputAdornment>}

            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            value={username}
            onChange={(e) => {
                setUsername(e.target.value);
            }} />

        {error && <FormHelperText id="my-helper-text">{error.message}</FormHelperText>}

    </FormControl>
}