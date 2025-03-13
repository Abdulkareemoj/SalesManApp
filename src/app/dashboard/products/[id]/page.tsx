"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery } from "@supabase-cache-helpers/postgrest-swr";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Package,
  FileText,
  Calendar,
  Tag,
  DollarSign,
  Truck,
  BarChart2,
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import EditProduct from "./edit-product";

const client = createClient();

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const productId = params.id as string;

  const {
    data: product,
    error,
    mutate,
  } = useQuery(
    client.from("Product").select("*").eq("id", productId).single(),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) {
    toast({
      variant: "destructive",
      title: "Error fetching product details",
      description: error.message,
    });
  }

  const handleBack = () => {
    router.back();
  };

  const handleEditSuccess = () => {
    // Revalidate the data after successful edit
    mutate();
  };

  if (!product && !error) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Button variant="outline" onClick={handleBack} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to products
      </Button>

      {product ? (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {product.productName}
              </CardTitle>
              <CardDescription>Product Information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-2">
                <FileText className="h-4 w-4 mt-1 text-muted-foreground" />
                <div className="flex-1">
                  <span className="text-sm font-medium">Description:</span>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Created:</span>
                <span>{new Date(product.createdAt).toLocaleDateString()}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Supplier:</span>
                <span>{product.supplier}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inventory Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Stock:</span>
                </div>
                <Badge
                  variant={
                    product.stock > 10
                      ? "default"
                      : product.stock > 0
                      ? "outline"
                      : "destructive"
                  }
                >
                  {product.stock} units
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Category:
                  </span>
                </div>
                <Badge variant="secondary">{product.category}</Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Price:</span>
                </div>
                <span className="font-medium">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.price)}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <BarChart2 className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Status:</span>
                </div>
                <Badge
                  variant={
                    product.status === "success"
                      ? "default"
                      : product.status === "processing"
                      ? "secondary"
                      : product.status === "pending"
                      ? "outline"
                      : "destructive"
                  }
                >
                  {product.status}
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <EditProduct
                product={product}
                onSuccess={handleEditSuccess}
                trigger={<Button className="w-full">Edit Product</Button>}
              />
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div className="flex items-center justify-center h-64">
          <p className="text-red-500">
            Failed to load product details. Please try again.
          </p>
        </div>
      )}
    </div>
  );
}

function ProductDetailsSkeleton() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Button variant="outline" disabled className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to products
      </Button>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2 mt-2" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-2">
              <Skeleton className="h-4 w-4 mt-1" />
              <div className="flex-1">
                <Skeleton className="h-4 w-20 mb-2" />
                <Skeleton className="h-16 w-full" />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-32" />
            </div>
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-40" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-1/2" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-6 w-16" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-6 w-16" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-6 w-16" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-20" />
              </div>
              <Skeleton className="h-6 w-16" />
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
