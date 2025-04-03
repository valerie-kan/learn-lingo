import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import app from "./firebaseConfig";

const auth = getAuth(app);

export const registerUser = async ({ name, email, password }) => {
  try {
    const userInfo = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User registered:", userInfo.user);

    await updateProfile(userInfo.user, {
      displayName: name,
    });
  } catch (error) {
    console.error("Error registering user:", error.message);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const userInfo = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userInfo.user);
  } catch (error) {
    console.error("Error logging in user:", error.message);
  }
};

export const getUser = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("User is signed in:", user);
    } else {
      console.log("No user is signed in");
    }
  });
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out user:", error.message);
  }
};
