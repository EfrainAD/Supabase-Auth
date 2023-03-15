import MagicLink from './forum/MagicLink'
import SignUp from './forum/SignUp'
import PasswordSignIn from './forum/PasswordSignIn'

export default function Auth() {
     return (
          <>
               <MagicLink />
               <PasswordSignIn />
               <SignUp />
          </>
     )
}