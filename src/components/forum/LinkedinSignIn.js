import { useState } from 'react'
import { signInWithLinkedIn } from '../../services/supabase/supabaseAuth'

const LinkedinSignIn = () => {
     const [loading, setLoading] = useState(false)

     const handleLogin = async (e) => {
          e.preventDefault()
          
          try {
               setLoading(true)
               await signInWithLinkedIn()
          } catch (error) {
               alert(error.error_description || error.message)
          } finally {
               setLoading(false)
          }
     }

     return (
          <div className="row flex-center flex">
               <div className="col-6 form-widget" aria-live="polite">
                    {/* <p className="description">Sign in with Linkedin</p> */}
                    {loading ? (
                              'Sending...'
                         ) : (
                              <button 
                                   className="button block" 
                                   aria-live="polite" 
                                   onClick={handleLogin}
                              >
                                   Sign In With LinkedIn
                              </button>
                         )
                    }
               </div>
          </div>
     )
}

export default LinkedinSignIn