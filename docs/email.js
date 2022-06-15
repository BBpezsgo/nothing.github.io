import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
import {
    ActionCodeOperation,
    ActionCodeURL,
    AuthCredential,
    AuthErrorCodes,
    EmailAuthCredential,
    EmailAuthProvider,
    FacebookAuthProvider,
    FactorId,
    GithubAuthProvider,
    GoogleAuthProvider,
    OAuthCredential,
    OAuthProvider,
    OperationType,
    PhoneAuthCredential,
    PhoneAuthProvider,
    PhoneMultiFactorGenerator,
    ProviderId,
    RecaptchaVerifier,
    SAMLAuthProvider,
    SignInMethod,
    TwitterAuthProvider,
    applyActionCode,
    beforeAuthStateChanged,
    browserLocalPersistence,
    browserPopupRedirectResolver,
    browserSessionPersistence,
    checkActionCode,
    confirmPasswordReset,
    connectAuthEmulator,
    createUserWithEmailAndPassword,
    debugErrorMap,
    deleteUser,
    fetchSignInMethodsForEmail,
    getAdditionalUserInfo,
    getAuth,
    getIdToken,
    getIdTokenResult,
    getMultiFactorResolver,
    getRedirectResult,
    inMemoryPersistence,
    indexedDBLocalPersistence,
    initializeAuth,
    isSignInWithEmailLink,
    linkWithCredential,
    linkWithPhoneNumber,
    linkWithPopup,
    linkWithRedirect,
    multiFactor,
    onAuthStateChanged,
    onIdTokenChanged,
    parseActionCodeURL,
    prodErrorMap,
    reauthenticateWithCredential,
    reauthenticateWithPhoneNumber,
    reauthenticateWithPopup,
    reauthenticateWithRedirect,
    reload,
    sendEmailVerification,
    sendPasswordResetEmail,
    sendSignInLinkToEmail,
    setPersistence,
    signInAnonymously,
    signInWithCredential,
    signInWithCustomToken,
    signInWithEmailAndPassword,
    signInWithEmailLink,
    signInWithPhoneNumber,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    unlink,
    updateCurrentUser,
    updateEmail,
    updatePassword,
    updatePhoneNumber,
    updateProfile,
    useDeviceLanguage,
    verifyBeforeUpdateEmail,
    verifyPasswordResetCode
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

function getParameterByName(sParam) {
    console.log('getParameterByName')
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

/** @type {string} */
var actionCode;

// Configure the Firebase SDK.
// This is the minimum configuration required for the API to be used.
const config = {
    'apiKey': "AIzaSyCLrWhm0i-3E3h4dQY1UWtovIcoWLh9ouU" // Copy this key from the web initialization
    // snippet found in the Firebase console.
};
const app = initializeApp(config);
const auth = getAuth(app);

/** @param {string} menuId */
function ShowMenu(menuId) {
    const allMenu = document.getElementsByClassName('menu')

    for (let i = 0; i < allMenu.length; i++) {
        const menu = allMenu[i];

        if (menu.id == menuId) {
            menu.classList.remove('hidden')
        } else {
            menu.classList.add('hidden')
        }
    }
}

function handleResetPassword(continueUrl, lang) {
    // Verify the password reset code is valid.
    verifyPasswordResetCode(auth, actionCode).then((email) => {
        const accountEmail = email;

        document.getElementById('confirm-password-reset-new-password-textbox').disabled = false
        document.getElementById('confirm-password-reset-submit').disabled = false

        ShowMenu('confirm-password-reset')
        document.getElementById('confirm-password-reset-email-label').innerText = accountEmail
    }).catch((error) => {
        ShowMenu('invalid-code')
    });
}

function handleRecoverEmail(lang) {
    let restoredEmail = null;
    // Confirm the action code is valid.
    checkActionCode(auth, actionCode).then((info) => {
        // Get the restored email address.
        restoredEmail = info['data']['email'];

        // Revert to the old email.
        return applyActionCode(auth, actionCode);
    }).then(() => {
        ShowMenu('email-restored')
    }).catch((error) => {
        ShowMenu('invalid-code')
    });
}

/** @param {string} continueUrl */
function handleVerifyEmail(continueUrl, lang) {
    // Try to apply the email verification code.
    applyActionCode(auth, actionCode).then((resp) => {
        // Email address has been verified.
        if (continueUrl != undefined) {
            if (continueUrl.length > 2) {
                document.getElementById('email-verifyed-return').style.display = 'block'
                document.getElementById('email-verifyed-return-link').href = continueUrl
            }
        }
    }).catch((error) => {
        ShowMenu('invalid-code')
    });
}

function OnButton_ConfirmNewPassword() {
    document.getElementById('confirm-password-reset-new-password-textbox').disabled = true
    document.getElementById('confirm-password-reset-submit').disabled = true
    // Save the new password.
    confirmPasswordReset(auth, actionCode, document.getElementById('confirm-password-reset-new-password-textbox').value).then((resp) => {
        // Password reset has been confirmed and new password updated.

        // TODO: Display a link back to the app, or sign-in the user directly
        // if the page belongs to the same domain as the app:
        // auth.signInWithEmailAndPassword(accountEmail, newPassword);

        // TODO: If a continue URL is available, display a button which on
        // click redirects the user back to the app via continueUrl with
        // additional state determined from that URL's parameters.
    }).catch((error) => {
        document.getElementById('confirm-password-reset-new-password-textbox').disabled = false
        document.getElementById('confirm-password-reset-submit').disabled = false
        document.getElementById('confirm-password-reset-error-message').innerText = error
    });
}

function OnButton_SendPasswordResetEmail() {
    sendPasswordResetEmail(auth, restoredEmail).then(() => {
        // Password reset confirmation sent. Ask user to check their email.
    }).catch((error) => {
        // Error encountered while sending password reset code.
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded')

    // Get the action to complete.
    const mode = getParameterByName('mode');
    // Get the one-time code from the query parameter.
    actionCode = getParameterByName('oobCode');
    // (Optional) Get the continue URL from the query parameter if available.
    const continueUrl = getParameterByName('continueUrl');
    // (Optional) Get the language code if available.
    const lang = getParameterByName('lang') || 'en';

    console.log('mode: ' + mode)
    console.log('actionCode: ' + actionCode)
    console.log('continueUrl: ' + continueUrl)
    console.log('lang: ' + lang)

    // Handle the user management action.
    switch (mode) {
        case 'resetPassword':
            // Display reset password handler and UI.
            handleResetPassword(continueUrl, lang);
            break;
        case 'recoverEmail':
            // Display email recovery handler and UI.
            handleRecoverEmail(lang);
            break;
        case 'verifyEmail':
            // Display email verification handler and UI.
            handleVerifyEmail(continueUrl, lang);
            break;
        default:
            break;
    }
}, false);