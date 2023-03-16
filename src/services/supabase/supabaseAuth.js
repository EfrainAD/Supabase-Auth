import { supabase } from './supabaseClient'

export const signInWithGoogle = async () => {
   const { error } = await supabase.auth.signInWithOAuth({
     provider: 'google',
   })
   
   if (error) throw error
 }