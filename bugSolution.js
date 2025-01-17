import { initializeApp } from "firebase/app";
// ... other imports

const firebaseConfig = {
  // ... your Firebase config
};

try {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase initialized successfully');
  // ... your Firebase code here
} catch (error) {
  console.error('Firebase initialization error:', error);
  // Handle the error appropriately (e.g., display a user-friendly message)
}
// ... rest of your code