import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCI7r8RJXFReYi7SA_CHgjcRD4UokBjIng",
  authDomain: "latihan-firebase-1e755.firebaseapp.com",
  databaseURL: "https://latihan-firebase-1e755-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "latihan-firebase-1e755",
  storageBucket: "latihan-firebase-1e755.firebasestorage.app",
  messagingSenderId: "881557238505",
  appId: "1:881557238505:web:a5b84db1495d3dd8cbf678",
  measurementId: "G-L08KZ6EDL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const storage = getStorage(app)

export { app, database, storage }

