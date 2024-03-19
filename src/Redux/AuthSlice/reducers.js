function setUsername(state, action) {
    state.username = action.payload;
}

function setPassword(state, action) {
    state.password = action.payload
}

function setShowOtpScreen(state, action) {
    state.showOtpScreen = action.payload
}

function setGetOtpResponse(state, action) {
    state.getOtpResponse = action.payload
}

function setOtpError(state, action) {
    state.otpError = action.payload;
}

function setAuthMode(state, action) {
    state.authMode = action.payload;
}

function setIsProgressing(state, action) {
    state.isProgressing = action.payload;
}

function setResendTimeout(state, action) {
    state.resendTimeout = action.payload;
}

function setOtp(state, action) {
    state.otp = action.payload;
}

function setRetypePassword(state, action) {
    state.retypePassword = action.payload;
}

export { setUsername, setPassword, 
    setShowOtpScreen, setGetOtpResponse, 
    setOtpError, setAuthMode, setIsProgressing, 
    setResendTimeout, setOtp, setRetypePassword }