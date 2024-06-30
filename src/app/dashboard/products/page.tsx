"use client";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { createClient } from "@/utils/supabase/client";
import { Icons } from "@/components/ui/icons";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";

const client = createClient();
export default function ProductsPage() {
  const { toast } = useToast();
  const { data, error } = useQuery(
    client
      .from("Product")
      .select(
        "id,productName,description,createdAt,stock,category,price,status,supplier"
      ),
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
