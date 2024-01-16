import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect,signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {
  getFirestore, doc, getDoc, setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyACxcTnPVXtBxBmU9PM_JgUhtrEzDJpaRU",
  authDomain: "store-db-43722.firebaseapp.com",
  projectId: "store-db-43722",
  storageBucket: "store-db-43722.appspot.com",
  messagingSenderId: "1085618974508",
  appId: "1:1085618974508:web:5bd404b77cfe861c2c4689"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
 const userDocRef = doc(db, 'users', userAuth.uid)

 console.log(userDocRef)

 const userSnapshot = await getDoc(userDocRef)
 console.log(userSnapshot)
 console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      }) 
    } catch(error) {
      console.log("error creating the user", error.message)
    }
  }

return userDocRef;
}

