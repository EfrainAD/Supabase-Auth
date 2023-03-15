import { useState } from 'react'
import { supabase } from './supabaseClient'
import TextField from './TextField'

const SignUp = () => {
     const [loading, setLoading] = useState(false)
     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')
     const [comfirmPassword, setComfirmPassword] = useState('')

     // Utils
     const validateSignUpForm = () => {
          if (email === '' || password === '' || comfirmPassword === '') 
          throw new Error("All fields are required!")
          if (password !== comfirmPassword)
               throw new Error('Passwords do not match!')
          if (password.length < 6)
               throw new Error('Password should be at least 6 characters')
     }

     const handleSubmit = async (e) => {
          e.preventDefault()
          
          try {
               validateSignUpForm()
               
               setLoading(true)
               const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                  })
               // const error = false
               // const data = 'data'
               console.log('data', data)
               
               if (error) throw error
               
               // alert('Check your email to comfirm your email!')
          } catch (error) {
               alert(error.error_description || error.message)
          } finally {
               setLoading(false)
          }
     }

     return (
     <div className="row flex-center flex">
          <div className="col-6 form-widget" aria-live="polite">
               <p className="description">Sign Up via old fashion email and password</p>
               {
                    loading ? (
                         'creating account...'
                    ) : (
                         <form onSubmit={handleSubmit}>
                              <TextField
                                   lable='Email'
                                   id="email"
                                   className="inputField"
                                   type="email"
                                   autoComplete='username'
                                   placeholder="Your email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                              />
                              <TextField
                                   lable='Password'
                                   id="password"
                                   className="inputField"
                                   type="password"
                                   autoComplete='new-password'
                                   placeholder="Your password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                              />
                              <TextField
                                   lable='Comfrim Password'
                                   id="comfirmpassword"
                                   className="inputField"
                                   type="password"
                                   autoComplete='new-password'
                                   placeholder="Your password again"
                                   value={comfirmPassword}
                                   onChange={(e) => setComfirmPassword(e.target.value)}
                              />

                              <button className="button block" aria-live="polite">
                                   Register
                              </button>
                         </form>
                    )
               }
          </div>
     </div>
     )
}

export default SignUp