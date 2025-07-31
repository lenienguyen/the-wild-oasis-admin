import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xsgtolfvtspxcaoxbscw.supabase.co";
const supabaseKey = "sb_publishable_PZDQPwXaQ7HgdF2LKyLY7w_v0VvE52p";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
