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

    await updateProfile(userInfo.user, {
      displayName: name,
    });
  } catch (error) {
    console.error("Error registering user:", error.message);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error logging in user:", error.message);
  }
};

export const getUser = () => {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        resolve(user.displayName);
      }
    });
  });
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out user:", error.message);
  }
};
