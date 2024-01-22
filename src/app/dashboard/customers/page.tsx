import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Customer, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Customer[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "processing",
      email: "example@gmail.com",
    },
    {
      id: "489e135yh",
      amount: 7545,
      status: "failed",
      email: "example@gmail.com",
    },
    {
      id: "48j133442",
      amount: 985,
      status: "success",
      email: "ple@gmail.com",
    },
    {
      id: "48j5osl42",
      amount: 1765,
      status: "processing",
      email: "exa@gmail.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "success",
      email: "example@gmail.com",
    },
    {
      id: "489l3wp4c2",
      amount: 1205,
      status: "success",
      email: "dgmle@gmail.com",
    },
    {
      id: "489e1d42",
      amount: 125,
      status: "failed",
      email: "exe@gmail.com",
    },
    {
      id: "489edg42",
      amount: 1255,
      status: "failed",
      email: "exale@gmail.com",
    },
    {
      id: "489e1dyb2",
      amount: 1343,
      status: "processing",
      email: "exame@gmail.com",
    },
    {
      id: "48931d42",
      amount: 25,
      status: "success",
      email: "xample@gmail.com",
    },
  ];
}

export default async function CustomersPage() {
  const data = await getData();
  return (
    <div className="m-6">
      <div className="container mx-auto py-3">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
