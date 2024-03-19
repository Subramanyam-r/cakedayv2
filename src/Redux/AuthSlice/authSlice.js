import { createSlice } from "@reduxjs/toolkit";
import * as reducers from "./reducers";

const initialState = {
    username: "",
    password: "",
    retypePassword: "",
    showOtpScreen: false,
    getOtpResponse: null,
    otp: "",
    otpError: null,
    authMode: "login",
    isProgressing: false,
    resendTimeout: 0,
}

let authSlice = createSlice({
    name: "loginSlice",
    initialState: initialState,
    reducers
});

export default authSlice;
export const { setUsername, setPassword, 
    showOtpScreen, hideOtpScreen, setGetOtpResponse, 
    setOtpError, setResendTimeout, setOtp, setRetypePassword } = authSlice.actions;