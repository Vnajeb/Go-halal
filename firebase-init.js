import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAnalytics }   from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1dgKamvYTYowgGsS7ZxEsj-pLjJRUlVc",
  authDomain: "halalgo-2.firebaseapp.com",
  projectId: "halalgo-2",
  storageBucket: "halalgo-2.firebasestorage.app",
  messagingSenderId: "308177144684",
  appId: "1:308177144684:web:48785209b2326371b60149",
  measurementId: "G-FY9S8VT9TT"
};

// Initialize Firebase
const app       = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db        = getFirestore(app);

export { db };  // to be imported in other modules
