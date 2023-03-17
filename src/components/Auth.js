import MagicLink from './forum/MagicLink'
import SignUp from './forum/SignUp'
import PasswordSignIn from './forum/PasswordSignIn'
import GoogleSignIn from './forum/GoogleSignIn'
import FacebookSignIn from './forum/FacebookSignIn'
import LinkedinSignIn from './forum/LinkedinSignIn'

export default function Auth() {
     return (
          <>
               <MagicLink />
               <GoogleSignIn />
               <LinkedinSignIn />
               <FacebookSignIn />
               <PasswordSignIn />
               <SignUp />
          </>
     )
}