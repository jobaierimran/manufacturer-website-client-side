// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,




    /*     apiKey: "AIzaSyA6cGrZSio_GmKnErgxSUF7hM2U2ZonxNw",
        authDomain: "medi-tools-manufacture.firebaseapp.com",
        projectId: "medi-tools-manufacture",
        storageBucket: "medi-tools-manufacture.appspot.com",
        messagingSenderId: "598027404807",
        appId: "1:598027404807:web:02c6bf9ede46e8d1c88ca2" */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;