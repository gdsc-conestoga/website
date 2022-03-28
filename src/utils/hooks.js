import { useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export function useUser() {
  const [user, setUser] = useState(null)

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    console.log(user);
    setUser(user)
  });

  return user
}