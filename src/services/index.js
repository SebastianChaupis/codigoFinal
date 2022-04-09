// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { doc, getDocs, collection, getFirestore, setDoc, updateDoc, deleteDoc, getDoc } from "firebase/firestore/lite";
import { v4 as uudiv4 } from "uuid";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAcvTpBwDUUMlfPsCGxfLIH4dWcbOiE8OU",
  authDomain: "data-base-7b254.firebaseapp.com",
  projectId: "data-base-7b254",
  storageBucket: "data-base-7b254.appspot.com",
  messagingSenderId: "444628107049",
  appId: "1:444628107049:web:3c89668f241cede3228138",
  measurementId: "G-5XQFVHXXB4"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getProductShop = async () => {
  const collectionShop = collection(db, "toys");
  const documentShop = await getDocs(collectionShop);
  const shop = documentShop.docs.map((doc) => doc.data());
  return shop;
};

export const storeProductShop = async (product) => {
  const id = uudiv4().replace("-", "");
  product.id = id;
  await setDoc(doc(db, "toys", id), product);
}

export const updateProductShop = async (id, product) => {
  await updateDoc(doc(db, "toys", id), product);
}

export const deleteProductShop = async (id) => {
  await deleteDoc(doc(db, "toys", id));
}
