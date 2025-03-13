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
import { ArrowLeft, Mail, User, Calendar, Tag, CreditCard } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import EditCustomer from "./edit-customer";

const client = createClient();

export default function CustomerDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const customerId = params.id as string;

  const {
    data: customer,
    error,
    mutate,
  } = useQuery(
    client.from("Customer").select("*").eq("id", customerId).single(),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error) {
    toast({
      variant: "destructive",
      title: "Error fetching customer details",
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

  if (!customer && !error) {
    return <CustomerDetailsSkeleton />;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <Button variant="outline" onClick={handleBack} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to customers
      </Button>

      {customer ? (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {customer.name}
              </CardTitle>
              <CardDescription>Customer Profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Username:</span>
                <span>{customer.username}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Email:</span>
                <span>{customer.email}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Created:</span>
                <span>{new Date(customer.createdAt).toLocaleDateString()}</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Role:</span>
                </div>
                <Badge
                  variant={customer.role === "admin" ? "default" : "outline"}
                >
                  {customer.role}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 rounded-full bg-muted" />
                  <span className="text-sm text-muted-foreground">Status:</span>
                </div>
                <Badge
                  variant={
                    customer.status === "success"
                      ? "default"
                      : customer.status === "processing"
                      ? "secondary"
                      : customer.status === "pending"
                      ? "outline"
                      : "destructive"
                  }
                >
                  {customer.status}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Subscription:
                  </span>
                </div>
                <Badge
                  variant={
                    customer.subscriptionTier === "business"
                      ? "default"
                      : customer.subscriptionTier === "paid"
                      ? "secondary"
                      : "outline"
                  }
                >
                  {customer.subscriptionTier}
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <EditCustomer
                customer={customer}
                onSuccess={handleEditSuccess}
                trigger={<Button className="w-full">Edit Customer</Button>}
              />
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div className="flex items-center justify-center h-64">
          <p className="text-red-500">
            Failed to load customer details. Please try again.
          </p>
        </div>
      )}
    </div>
  );
}

function CustomerDetailsSkeleton() {
  return (
    <div className="container mx-auto py-10 px-4">
      <Button variant="outline" disabled className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to customers
      </Button>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2 mt-2" />
          </CardHeader>
          <CardContent className="space-y-4">
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
            <div className="flex items-center space-x-2">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-4 w-32" />
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
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
