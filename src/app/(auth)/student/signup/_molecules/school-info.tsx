import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import db from "../../../../../../db.json";

export function SchoolInfo() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <FormField>
          <Label className="font-regular">Name of school*</Label>
          <Select>
            <SelectTrigger>
              <SelectValue value="Select school" />
            </SelectTrigger>
            <SelectContent>
              {db.schools.map((school) => (
                <SelectItem key={school.name} value={school.name}>
                  {school.full_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormField>
        <FormField>
          <Label className="font-regular">Matriculation Number*</Label>
          <Input />
        </FormField>
      </div>
    </div>
  );
}
