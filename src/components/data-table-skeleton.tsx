import { Skeleton } from "@/components/ui/skeleton";

export function DataTableSkeleton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[250px]" />
        <Skeleton className="h-8 w-[200px]" />
      </div>
      <div className="rounded-md border">
        <div className="h-16 border-b px-4 py-3">
          <Skeleton className="h-8 w-full" />
        </div>
        <div className="p-4 space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-4">
              <Skeleton className="h-8 w-[30%]" />
              <Skeleton className="h-8 w-[20%]" />
              <Skeleton className="h-8 w-[20%]" />
              <Skeleton className="h-8 w-[15%]" />
              <Skeleton className="h-8 w-[15%]" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-[100px]" />
        <Skeleton className="h-8 w-[200px]" />
      </div>
    </div>
  );
}
