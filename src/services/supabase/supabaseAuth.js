import { supabase } from './supabaseClient'

// Google Sign In
export const signInWithGoogle = async () => {
   const { error } = await supabase.auth.signInWithOAuth({
     provider: 'google',
   })
   
   if (error) throw error
 }
 
//  Facebook Sign In
 export const signInWithFacebook = async () => {
   const { error } = await supabase.auth.signInWithOAuth({
     provider: 'facebook',
   })

   if (error) throw error
 }