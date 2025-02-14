import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function SelectTargetArea() {
  return (
    <Select>
        <Label>Target Area</Label>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select area" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="entire store">Entire Store</SelectItem>
          <SelectItem value="collections">Collections</SelectItem>
          <SelectItem value="products">Products</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
