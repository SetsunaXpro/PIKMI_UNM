// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase project URL and anon key
const supabase = createClient(
  'SUPABASE_URL', // Your Supabase URL
  'SUPABASE_ANON_KEY' // Your Supabase anon/public key
);

export default supabase;
