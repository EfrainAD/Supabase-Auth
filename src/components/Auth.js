import MagicLink from './forum/MagicLink'
import SignUp from './forum/SignUp'
import PasswordSignIn from './forum/PasswordSignIn'
import GoogleSignIn from './forum/GoogleSignIn'
import FacebookSignIn from './forum/FacebookSignIn'

export default function Auth() {
     return (
          <>
               <MagicLink />
               <GoogleSignIn />
               <FacebookSignIn />
               <PasswordSignIn />
               <SignUp />
          </>
     )
}