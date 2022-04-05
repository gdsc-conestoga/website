import { Login } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import { logIn, logOut } from '../../services/authService'
import { useUser } from "../../utils/hooks"
import { useMemo } from 'react'
import './Account.css'

export default function Account({ ...args }) {
  const user = useUser()

  const userLetters = useMemo(
    () => user?.displayName.split(' ').map(p => p[0]).slice(0, 2).join(''),
    [user],
  )
  
  return <div {...args}>
    {
      user 
        ? user.photoURL
          ? <Avatar onClick={logOut} style={{ cursor: 'pointer' }} src={user.photoURL} alt='Profile' />
          : <Avatar onClick={logOut} style={{ cursor: 'pointer' }}>{userLetters}</Avatar>
        : <Login onClick={logIn} fontSize='large' cursor='pointer' />
    }
  </div> 
}