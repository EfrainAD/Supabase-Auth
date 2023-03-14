import { useState, useEffect } from 'react'
import Avatar from './Avatar'
import { supabase } from './supabaseClient'

const Account = ({ session }) => {
   const [loading, setLoading] = useState(true)
   const [username, setUsername] = useState(null)
   const [website, setWebsite] = useState(null)
   const [avatar_url, setAvatarUrl] = useState(null)

   useEffect(() => {
      getProfile()
   }, [session])

   const getProfile = async () => {
      try {
         setLoading(true)
         const { user } = session

         // let { data, error, status } = await supabase
         //    .from('profiles')
         //    .select(`username, website, avatar_url`)
         //    .eq('id', user.id)
         //    .single()

         const { data } = await supabase.auth.getUser()
         console.log('data from getprofile', data)
         // if (error && status !== 406) {
         //    throw error
         // }

         if (data) {
            const {username, website, avatar_url} = data.user.user_metadata
            setUsername(username)
            setWebsite(website)
            setAvatarUrl(avatar_url)
            console.log('getProfile data =', data)
         }
      } catch (error) {
         alert(error.message)
      } finally {
         setLoading(false)
      }
   }

   const updateProfile = async ({ username, website, avatar_url }) => {
      try {
         setLoading(true)
         const { user } = session

         const updates = {
            id: user.id,
            username,
            website,
            avatar_url,
            updated_at: new Date(),
         }

         // let { error } = await supabase.from('profiles').upsert(updates)
         const { data, error } = await supabase.auth.updateUser({
            data: {
               username,
               website,
               avatar_url,
            }
         })
         console.log('data returned', data)
         if (error) {
            throw error
         }
      } catch (error) {
         alert(error.message)
      } finally {
         setLoading(false)
      }
   }

   return (
      <div aria-live="polite">
         {loading ? (
            'Saving ...'
         ) : (
            <div className="form-widget">
               <div>Email: {session.user.email}</div>
               <Avatar
                  url={avatar_url}
                  size={150}
                  userId={session.user.id}
                  onUpload={(url) => {
                     setAvatarUrl(url)
                     updateProfile({ username, website, avatar_url: url })
                  }}
               />
               <div>
                  <label htmlFor="username">Name</label>
                  <input
                     id="username"
                     type="text"
                     value={username || ''}
                     onChange={(e) => setUsername(e.target.value)}
                  />
               </div>
               <div>
                  <label htmlFor="website">Website</label>
                  <input
                     id="website"
                     type="url"
                     value={website || ''}
                     onChange={(e) => setWebsite(e.target.value)}
                  />
               </div>
               <div>
                  <button className="button primary block" disabled={loading} onClick={() => updateProfile({ username, website, avatar_url })}>
                     Update profile
                  </button>
               </div>
            </div>
         )}
         <button type="button" className="button block" onClick={() => supabase.auth.signOut()}>
            Sign Out
         </button>
      </div>
   )
}

export default Account