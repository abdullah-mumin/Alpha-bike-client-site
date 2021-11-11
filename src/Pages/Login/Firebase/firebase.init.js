import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";



const initializeAuthentation = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentation;