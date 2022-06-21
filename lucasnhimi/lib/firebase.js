// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebase = initializeApp({
    //   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    //   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    //   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    apiKey: "AIzaSyChyjJ8TYt9UVMXhO0J7lHI6XGw2E6hEBg",
    authDomain: "lucasnhimi-c471d.firebaseapp.com",
    // authDomain: "https://lucasnhimi-c471d.firebaseapp.com/__/auth/handler",
    projectId: "lucasnhimi-c471d",
    storageBucket: "lucasnhimi-c471d.appspot.com",
    messagingSenderId: "572995604376",
    appId: "1:572995604376:web:fc9f554557dfbdf3d225ed"
})

// firebase.auth
export default firebase