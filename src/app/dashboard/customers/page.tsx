"use client";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@supabase/supabase-js";
import { Icons } from "@/components/ui/icons";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be set"
  );
}

const client = createClient(supabaseUrl, supabaseKey);

export default function CustomersPage() {
  const { toast } = useToast();
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

  if (error)
    return (
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Uh oh! Something went wrong.",
            description: <div>Error: {error.message}</div>,
            action: <ToastAction altText="Try again">Try again</ToastAction>,
          });
        }}
      >
        Show Toast
      </Button>
    );
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
