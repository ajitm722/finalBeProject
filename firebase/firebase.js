// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const loadDB = async() =>{
    const firebaseConfig = {
        apiKey: "AIzaSyBgMM7f6G8BbLpGRRyn-adJIp9SXhucScg",
        authDomain: "beproject-b8b64.firebaseapp.com",
        projectId: "beproject-b8b64",
        storageBucket: "beproject-b8b64.appspot.com",
        messagingSenderId: "1025134775840",
        appId: "1:1025134775840:web:21348ef5ea4794fa0b7645",
        measurementId: "G-J534FWW8K3"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const firestore = getFirestore();
      const storage = getStorage();
      return {storage, firestore};
}
export {loadDB}
