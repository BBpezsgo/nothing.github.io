// Import the functions you need from the SDKs you need
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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzIkzv5H9A5rQIhrBt1rz1Tzm2YbDz8RA",
    authDomain: "nothing-2-5f7c6.firebaseapp.com",
    databaseURL: "https://nothing-2-5f7c6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "nothing-2-5f7c6",
    storageBucket: "nothing-2-5f7c6.appspot.com",
    messagingSenderId: "24081556174",
    appId: "1:24081556174:web:89081129d74141522f269f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

function SetText(elementId, text, defaultText) {
    if (text == 'null' || text == 'undefined' || text == undefined || text == '') {
        if (defaultText == undefined) {
            document.getElementById(elementId).innerText = ''
        } else {
            document.getElementById(elementId).innerText = defaultText
        }
    } else {
        document.getElementById(elementId).innerText = text
    }
}

function SetVisible(elementId, visible, defaultValue) {
    if (visible == 'null' || visible == 'undefined' || visible == null || visible == undefined || visible == '') {
        if (defaultValue != true) {
            document.getElementById(elementId).style.display = 'none'
        }
    } else {
        if (visible != true) {
            document.getElementById(elementId).style.display = 'none'
        }
    }
}

function SetInvisible(elementId, invisible, defaultValue) {
    if (invisible == 'null' || invisible == 'undefined' || invisible == null || invisible == undefined || invisible == '') {
        if (defaultValue == true) {
            document.getElementById(elementId).style.display = 'none'
        }
    } else {
        if (invisible == true) {
            document.getElementById(elementId).style.display = 'none'
        }
    }
}

onAuthStateChanged(auth, (user) => {
    document.getElementById('loading').style.display = 'none'
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User

        SetText('firebase-displayName', user.displayName, '<No username>')
        SetText('firebase-email', user.email)
        SetVisible('firebase-emailVerified', user.emailVerified, false)
        SetInvisible('firebase-emailUnverified', user.emailVerified, false)
        SetVisible('firebase-isAnonymous', user.isAnonymous, false)
        SetVisible('firebase-multiFactor', user.multiFactor, false)
        SetText('firebase-phoneNumber', user.phoneNumber, '<nincs>')
        SetText('firebase-photoURL', user.photoURL, '<nincs>')
        SetText('firebase-uid', user.uid)

        document.getElementById('logged-in').classList.remove('hidden')
        document.getElementById('logged-out').classList.add('hidden')
    } else {
        document.getElementById('logged-in').classList.add('hidden')
        document.getElementById('logged-out').classList.remove('hidden')
    }
});

function GetReadableError(errorCode) {
    switch (errorCode) {
        case 'auth/app-deleted':
            return "The instance of FirebaseApp has been deleted."
        case 'auth/app-not-authorized':
            return "The app is not authorized to use Firebase Authentication with the provided API key."
        case 'auth/argument-error':
            return "A method is called with incorrect arguments."
        case 'auth/invalid-api-key':
            return "The provided API key is invalid."
        case 'auth/invalid-user-token':
            return "The user's credential is no longer valid. The user must sign in again."
        case 'auth/invalid-tenant-id':
            return "The tenant ID provided is invalid."
        case 'auth/network-request-failed':
            return "A network error (such as timeout, interrupted connection or unreachable host) has occurred."
        case 'auth/operation-not-allowed':
            return "You have not enabled the provider in the Firebase Console."
        case 'auth/requires-recent-login':
            return "The user's last sign-in time does not meet the security threshold."
        case 'auth/too-many-requests':
            return "Requests are blocked from a device due to unusual activity. Trying again after some delay would unblock."
        case 'auth/unauthorized-domain':
            return "The app domain is not authorized for OAuth operations for your Firebase project."
        case 'auth/user-disabled':
            return "The user account has been disabled by an administrator."
        case 'auth/user-token-expired':
            return "The user's credential has expired. This could also be thrown if a user has been deleted. Prompting the user to sign in again should resolve this for either case."
        case 'auth/web-storage-unsupported':
            return "The browser does not support web storage or if the user disables them."
        default:
            return errorCode
    }
}

/** @param {Event} event */
window.Login = (event) => {
    console.log('Login()')
    OnLoading()
    signInWithEmailAndPassword(auth, document.getElementById('email').value, document.getElementById('password').value)
        .then((userCredential) => {
            const user = userCredential.user
            console.log('logged in')

            document.getElementById('logged-in').classList.remove('hidden')
            document.getElementById('logged-out').classList.add('hidden')

            document.getElementById('login-error').style.display = 'none'
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.error(errorCode)

            document.getElementById('logged-in').classList.add('hidden')
            document.getElementById('logged-out').classList.remove('hidden')

            document.getElementById('login-error').style.display = 'block'
            SetText('login-error-message', GetReadableError(errorCode))
        })
}

function OnLoading() {
    document.getElementById('loading').classList.remove('hidden')
    document.getElementById('logged-in').classList.add('hidden')
    document.getElementById('logged-out').classList.add('hidden')
    document.getElementById('login-error').style.display = 'none'
}

window.Logout = () => {
    console.log('Logout()')
    OnLoading()
    signOut(auth)
        .then(() => {
            console.log('logged out')
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            console.error(errorCode)

            document.getElementById('logged-in').classList.remove('hidden')
        })
}