import { Login } from "@mui/icons-material"
import AccountCircle from "@mui/icons-material/AccountCircle"
import { logIn, logOut } from '../../services/authService'
import { useUser } from "../../utils/hooks"

export default function Account() {
  const user = useUser()

  return user 
    ? user.photoURL
      ? <img src={user.photoURL} alt='Profile' className='profile-image' onClick={logOut} />
      : <AccountCircle onClick={logOut} fontSize='large' cursor='pointer' />
    : <Login onClick={logIn} fontSize='large' cursor='pointer' />
}