import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
import { Product, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Customer[]> {
  // Fetch data from your API here.
  return [
    {
      name: "product1",
      createdAt: 12 - 11 - 2023,
      id: "728ed52f",
      amount: 100,
      status: "pending",
      quantity: "344",
    },
    {
      name: "product2",
      createdAt: 12 - 11 - 2023,
      id: "489e1d42",
      amount: 125,
      status: "processing",
      quantity: "12",
    },
    {
      name: "product13412",
      createdAt: 12 - 11 - 2023,
      id: "489e135yh",
      amount: 7545,
      status: "failed",
      quantity: "76",
    },
    {
      name: "product1875",
      createdAt: 12 - 11 - 2023,
      id: "48j133442",
      amount: 985,
      status: "success",
      quantity: "876",
    },
    {
      name: "product1184",
      createdAt: 12 - 11 - 2023,
      id: "48j5osl42",
      amount: 1765,
      status: "processing",
      quantity: "345",
    },
    {
      name: "product15673",
      createdAt: 12 - 11 - 2023,
      id: "489e1d42",
      amount: 125,
      status: "success",
      quantity: "578",
    },
    {
      name: "product6549",
      createdAt: 12 - 11 - 2023,
      id: "489l3wp4c2",
      amount: 1205,
      status: "success",
      quantity: "1",
    },
    {
      name: "product6411",
      createdAt: 12 - 11 - 2023,
      id: "489e1d42",
      amount: 125,
      status: "failed",
      quantity: "96",
    },
    {
      name: "product64",
      createdAt: 12 - 11 - 2023,
      id: "489edg42",
      amount: 1255,
      status: "failed",
      quantity: "8669",
    },
    {
      name: "product2112",
      createdAt: 12 - 11 - 2023,
      id: "489e1dyb2",
      amount: 1343,
      status: "processing",
      quantity: "0",
    },
    {
      name: "product42",
      createdAt: 12 - 11 - 2023,
      id: "48931d42",
      amount: 25,
      status: "success",
      quantity: "2",
    },
  ];
}

export default async function ProductsPage() {
  const data = await getData();
  return (
    <div className="m-6">
      <div className="container mx-auto py-3">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
}
