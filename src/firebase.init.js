// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7zeXwdbNjtOjcrXobqk4uuiZna-FDV3E",
    authDomain: "royal-perfume.firebaseapp.com",
    projectId: "royal-perfume",
    storageBucket: "royal-perfume.appspot.com",
    messagingSenderId: "620381583388",
    appId: "1:620381583388:web:4a7c94f3487c2eaa2607d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;