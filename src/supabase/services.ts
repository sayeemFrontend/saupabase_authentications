import supabase from './supabase';

export const authServices = supabase.auth;
export default { authServices };
