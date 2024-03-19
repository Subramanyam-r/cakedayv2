import firebase from "firebase/compat/app";


function isPhoneNumberBeingTyped(str) {
    return !isNaN(parseInt(str)) && str.length <= 10
}

async function getOtp(phoneNumber) {
    console.log(phoneNumber)
    try {
        console.log("getting otp")
        const appVerifier = window.recaptchaVerifier;
        let confirmationResult = await firebase.auth().signInWithPhoneNumber("+91" + phoneNumber, appVerifier);
        console.log(confirmationResult)
        return confirmationResult;
    } catch (err) {
        console.log(err);
        return err;
    }
}

async function signInWithEmail(email, password) {
    try {
        let userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        return userCredential.user;
    } catch(err) {
        console.log(err);
        return err;
    }
}

async function signOut() {
    await firebase.auth().signOut();
}

export { getOtp, isPhoneNumberBeingTyped, signOut, signInWithEmail };

