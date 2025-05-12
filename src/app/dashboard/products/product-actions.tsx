"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import type { Product } from "./columns"

interface ProductActionsProps {
  product: Product
}

export function ProductActions({ product }: ProductActionsProps) {
  const router = useRouter()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(product.id)}>Copy product ID</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push(`/dashboard/products/${product.id}`)}>
          View Product
        </DropdownMenuItem>
        <DropdownMenuItem>View payment details</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
