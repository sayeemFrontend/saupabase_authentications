import { createClient } from '@supabase/supabase-js';

const BASE_URL =
  import.meta.env.MODE === 'development'
    ? import.meta.env.VITE_BASE_URL_DEV
    : import.meta.env.VITE_BASE_URL_DEV;

const API_KEY = import.meta.env.VITE_API_KEY;

export default createClient(BASE_URL, API_KEY);
