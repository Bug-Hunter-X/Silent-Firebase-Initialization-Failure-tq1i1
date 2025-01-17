import { initializeApp } from "firebase/app";
// ... other imports

const firebaseConfig = {
  // ... your Firebase config
};

// This line is the potential source of the error
const app = initializeApp(firebaseConfig);

// ... rest of your code