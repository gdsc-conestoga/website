import { GithubAuthProvider, getAuth, signInWithRedirect } from "firebase/auth";

export async function logIn() {
  const provider = new GithubAuthProvider();

  const auth = getAuth();
  try {
    const result = await signInWithRedirect(auth, provider)
    console.log(result.user);
    return result.user
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error({ errorCode, errorMessage });
  }
}