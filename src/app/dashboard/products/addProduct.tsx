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
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  productname: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  description: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
  stock: z.string().min(5, { message: "Must be 5 or more characters long" }),
  category: z.string().min(5, { message: "Must be 5 or more characters long" }),
  price: z.string().min(5, { message: "Must be 5 or more characters long" }),
  status: z.string().min(5, { message: "Enter a Message" }),
  supplier: z.string().min(5, { message: "Enter a Message" }),
});

const AddProduct = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productname: "",
      description: "",
      stock: "",
      category: "",
      price: "",
      status: "",
      supplier: "",
    },
  });
  const { toast } = useToast();
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
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
                    <div className="flex flex-column ">
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="productname" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-column ">
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input placeholder="description" {...field} />
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-column ">
                      <FormLabel>Stock</FormLabel>
                      <FormControl>
                        <Input placeholder="stock" {...field} />
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-column ">
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
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="supplier"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-column ">
                      <FormLabel>Supplier</FormLabel>
                      <FormControl>
                        <Input placeholder="stock" {...field} />
                      </FormControl>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-around">
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
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-column ">
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input placeholder="price" {...field} />
                      </FormControl>
                    </div>

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
};

export default AddProduct;
