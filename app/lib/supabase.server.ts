import { createClient } from "@supabase/supabase-js";

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name}_NOT_SET`);
  return value;
}

export function createSupabaseAdminClient() {
  const url = required("SUPABASE_URL");
  const serviceRoleKey = required("SUPABASE_SERVICE_ROLE_KEY");

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
