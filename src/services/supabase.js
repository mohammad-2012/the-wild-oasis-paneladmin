import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tuzcqlxvkdaonvttelec.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1emNxbHh2a2Rhb252dHRlbGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3ODA1MDIsImV4cCI6MjA5NTM1NjUwMn0.C7Ud5p3dgn155obTG8gMioY9BaGwx-FPbJGC3-0HQgA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
