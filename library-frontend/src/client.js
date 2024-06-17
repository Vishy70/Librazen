
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://laeqipmuqwavuzpdesoe.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhZXFpcG11cXdhdnV6cGRlc29lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2NDMyNzUsImV4cCI6MjAzNDIxOTI3NX0.DBIDHNq3onNjm8rZIzc-vyTX47p7VOFBLBn4Mys5Zrs'
export const supabase = createClient(supabaseUrl, supabaseKey)