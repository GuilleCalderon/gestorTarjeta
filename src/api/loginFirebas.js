import firebaseApp from "../utils/firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebaseApp);

export const handlerLogin = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  const user = await signInWithEmailAndPassword(auth, email, password);
  console.log(user);
  return user;
};
