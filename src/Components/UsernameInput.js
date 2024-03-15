import { AccountCircle } from "@mui/icons-material";
import { FormControl, Icon, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { theme } from "../Theme";
import { useState } from "react";

export function UsernameInput() {
    const [isFocused, setIsFocused] = useState(false)
    return <FormControl sx={{width: "100%" }} variant="outlined">
        <InputLabel htmlFor="username-ip">Username</InputLabel>
        <OutlinedInput id="username-ip" label="Username" 
        startAdornment={<InputAdornment sx={{mr: theme.spacing(1)}}>
            <Icon color={isFocused ? "primary" : ""}>
                <AccountCircle />
            </Icon>
        </InputAdornment>}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)} />
    </FormControl>
}