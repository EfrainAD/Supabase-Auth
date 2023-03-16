import { useState } from 'react'
import { signInWithGoogle } from '../../services/supabase/supabaseAuth'

const GoogleSignIn = () => {
     const [loading, setLoading] = useState(false)

     const handleLogin = async (e) => {
          e.preventDefault()
          
          try {
               setLoading(true)
               await signInWithGoogle()
          } catch (error) {
               alert(error.error_description || error.message)
          } finally {
               setLoading(false)
          }
     }

     return (
          <div className="row flex-center flex">
               <div className="col-6 form-widget" aria-live="polite">
                    {/* <p className="description">Sign in Google</p> */}
                    {loading ? (
                              'Sending...'
                         ) : (
                              <button 
                                   className="button block" 
                                   aria-live="polite" 
                                   onClick={handleLogin}
                              >
                                   Sign In With Google
                              </button>
                         )
                    }
               </div>
          </div>
     )
}

export default GoogleSignIn