import { useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export function useUser() {
  const [user, setUser] = useState(null)

  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    console.log({user});
    
    if (user) {
      const data = await user.getIdTokenResult(true)
      user.isAdmin = !!data?.claims?.admin
    }

    setUser(user)
  });

  return user
}