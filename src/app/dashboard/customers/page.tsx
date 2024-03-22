import { Customer, columns } from "./columns";
import { DataTable } from "./data-table";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";

const client = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

async function getData(): Promise<Customer[]> {
  const { data, count } = useQuery(
    client
      .from("Customer")
      .select(
        "id,name,,username,email,createdAt,role,status,subscriptionTier",
        { count: "exact" }
      )
      .eq("username", "psteinroe"),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
}

export default async function CustomersPage() {
  const data = await getData();
  return (
    <div className="m-6">
      <div className="container mx-auto py-3">
        {/* remember to do some loading animation */}
        {/* if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div> */}
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
