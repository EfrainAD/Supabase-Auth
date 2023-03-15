import MagicLink from './MagicLink'
import SignUp from './SignUp'
import PasswordSignIn from './PasswordSignIn'

export default function Auth() {
     return (
          <>
               <MagicLink />
               <PasswordSignIn />
               <SignUp />
          </>
     )
}