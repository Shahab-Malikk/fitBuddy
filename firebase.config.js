import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBTetj631uEschLfzjVpefeXTwRcCKixwg",
  authDomain: "fitness-app-7bc22.firebaseapp.com",
  projectId: "fitness-app-7bc22",
  storageBucket: "fitness-app-7bc22.appspot.com",
  messagingSenderId: "553893086093",
  appId: "1:553893086093:web:dc0364f2dc0ba10997f3c4"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)