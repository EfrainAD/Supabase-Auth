import { useState } from 'react'
import { signInWithFacebook } from '../../services/supabase/supabaseAuth'

const FacebookSignIn = () => {
     const [loading, setLoading] = useState(false)

     const handleLogin = async (e) => {
          e.preventDefault()
          
          try {
               setLoading(true)
               await signInWithFacebook()
          } catch (error) {
               alert(error.error_description || error.message)
          } finally {
               setLoading(false)
          }
     }

     return (
          <div className="row flex-center flex">
               <div className="col-6 form-widget" aria-live="polite">
                    {/* <p className="description">Sign in with Facebook</p> */}
                    {loading ? (
                              'Sending...'
                         ) : (
                              <button 
                                   className="button block" 
                                   aria-live="polite" 
                                   onClick={handleLogin}
                              >
                                   Sign In With Facebook
                              </button>
                         )
                    }
               </div>
          </div>
     )
}

export default FacebookSignIn