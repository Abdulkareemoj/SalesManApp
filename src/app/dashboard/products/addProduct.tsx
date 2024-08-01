import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast, useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { useInsertMutation } from "@supabase-cache-helpers/postgrest-swr";
import { createClient } from "@/utils/supabase/client";

const client = createClient();
type FormData = z.infer<typeof formSchema>;

const formSchema = z.object({
  productname: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  description: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  stock: z.number().min(1, { message: "Must be a positive number" }),
  category: z.enum(["electronics", "clothing", "food", "books", "furniture"]),
  price: z.number().min(0, { message: "Must be a non-negative number" }),
  status: z.enum(["pending", "processing", "success", "failed"]),
  supplier: z.string().min(5, { message: "Must be 5 or more characters long" }),
});

export default function AddProduct() {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productname: "",
      description: "",
      stock: 0,
      category: "electronics",
      price: 0,
      status: "pending",
      supplier: "",
    },
  });

  const { trigger: insert } = useInsertMutation(client.from("Product"), ["id"]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log("Submitting data:", data); // Debugging log
      await insert([data]);
      toast({
        title: "Product added successfully.",
      });
    } catch (error) {
      console.error("Error adding product:", error); // Debugging log
      toast({
        title: "Failed to add product.",
      });
    }
  };

  return (
    <main>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Add new</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add a new Product</DialogTitle>
                <DialogDescription>
                  Enter details. Click save when you're done.
                </DialogDescription>
              </DialogHeader>

              <FormField
                control={form.control}
                name="productname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="productname" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="description" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input placeholder="stock" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    {" "}
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pending">pending</SelectItem>
                        <SelectItem value="processing">processing</SelectItem>
                        <SelectItem value="success">success</SelectItem>
                        <SelectItem value="failed">failed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="supplier"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Supplier</FormLabel>
                    <FormControl>
                      <Input placeholder="stock" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="pending">electronics</SelectItem>
                        <SelectItem value="processing">clothing</SelectItem>
                        <SelectItem value="success">food</SelectItem>
                        <SelectItem value="failed">books</SelectItem>
                        <SelectItem value="failed">furniture</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="price" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={() => {
                    toast({
                      title: "Added",
                      description: "New Product",
                    });
                  }}
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </Form>
    </main>
  );
}
