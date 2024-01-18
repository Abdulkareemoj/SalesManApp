import { InputHTMLAttributes } from "react";
import { Input } from "./ui/input";

export function Search({ placeholder }: any) {
  return (
    <div>
      <Input
        type="search"
        placeholder={placeholder}
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}
