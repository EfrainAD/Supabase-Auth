import { useState } from 'react'
import { supabase } from '../../services/supabase/supabaseClient'
import TextField from './TextField'

const validateSignInForm = (email, password) => {
     if (email === '' || password === '') 
     throw new Error("All fields are required!")
     if (password.length < 6)
          throw new Error('Password should be at least 6 characters')
}

const PasswordSignIn = () => {
     const [loading, setLoading] = useState(false)
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const handleLogin = async (e) => {
          e.preventDefault()

          try {
               validateSignInForm(email, password)
               setLoading(true)
               const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
               })
               console.log('data', data)
               if (error) throw error
          } catch (error) {
               alert(error.error_description || error.message)
          } finally {
               setLoading(false)
          }
     }

     return (
     <div className="row flex-center flex">
          <div className="col-6 form-widget" aria-live="polite">
               <p className="description">
                    Sign in via magic link with your email below
               </p>
               {
                    loading ? (
                         'Sending magic link...'
                    ) : (
                         <form onSubmit={handleLogin}>
                              <TextField
                                   lable='Email'
                                   id="email"
                                   className="inputField"
                                   type="email"
                                   placeholder="Your email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                              />
                              <TextField
                                   lable='Password'
                                   id="password"
                                   className="inputField"
                                   type="password"
                                   autoComplete='current-password'
                                   placeholder="Your password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                              />
                              <button className="button block" aria-live="polite">
                                   Sign In
                              </button>
                         </form>
               )}
          </div>
     </div>
     )
}

export default PasswordSignIn