"use client";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import { columns } from "./columns";
import { DataTable } from "./data-table";

import { createClient } from "@supabase/supabase-js";
import { Icons } from "@/components/ui/icons";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("SUPABASE_URL and SUPABASE_ANON_KEY must be set");
}

const client = createClient(supabaseUrl, supabaseKey);

export default function CustomersPage() {
  const { data, error } = useQuery(
    client
      .from("Customer")
      .select("id,name,username,email,createdAt,role,status,subscriptionTier"),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  console.log("Data:", data);
  console.log("Error:", error);

  if (error) return <div>Error: {error.message}</div>;
  if (!data)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      </div>
    );

  return (
    <div className="m-6">
      <div className="container mx-auto py-3">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
