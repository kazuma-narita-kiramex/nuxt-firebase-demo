import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/functions'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.firebaseApiKey,
    authDomain: process.env.firebaseAuthDomain,
    databaseURL: process.env.firebaseDatabaseURL,
    projectId: process.env.firebaseProjectId,
    storageBucket: process.env.firebaseStorageBucket,
    messagingSenderId: process.env.firebaseMessagingSenderId,
    appId: process.env.firebaseAppId
  })
}

export const authSignInOptions = [
  {
    provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    customParameters: {
      hd: process.env.authEmailDomain
    }
  }
]

export const auth = firebase.auth()

export const functions = firebase.functions();
if (process.env.NODE_ENV != "production") {
  functions.useFunctionsEmulator("http://127.0.0.1:5000");
}
