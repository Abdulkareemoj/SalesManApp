import { Search } from "@/components/search";
import { Button } from "@/components/ui/button";
export default function CustomersPage() {
  return (
    <div className="m-6">
      <div className="flex justify-between">
        <Search placeholder="Search for a Customer" />
        <Button>Add New</Button>
      </div>
      {/* <Table>

      </Table> */}
    </div>
  );
}
