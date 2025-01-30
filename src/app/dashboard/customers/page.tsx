"use client";

import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { createClient } from "@/utils/supabase/client";
import { DataTableSkeleton } from "@/components/data-table-skeleton";
import * as React from "react";

const client = createClient();

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

  // Use useEffect to show toast when there's an error
  React.useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Error fetching customers",
        description: error.message,
        action: (
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try again
          </Button>
        ),
      });
    }
  }, [error, toast]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500">
          Failed to load customers. Please try again.
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="m-6">
        <div className="container mx-auto py-3">
          <DataTableSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div className="m-6">
      <div className="container mx-auto py-3">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
