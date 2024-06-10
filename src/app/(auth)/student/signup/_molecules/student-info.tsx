import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function StudentInfo() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <FormField>
          <Label className="font-regular">First name</Label>
          <Input type="text" disabled />
        </FormField>
        <FormField>
          <Label className="font-regular">Last name</Label>
          <Input type="text" disabled />
        </FormField>

        <FormField>
          <Label className="font-regular">Alternative Email</Label>
          <Input type="email" disabled />
        </FormField>
        <FormField>
          <Label className="font-regular">Matriculation Number</Label>
          <Input disabled />
        </FormField>
        <FormField>
          <Label className="font-regular">Department</Label>
          <Input disabled />
        </FormField>
        <FormField>
          <Label className="font-regular">Faculty</Label>
          <Input disabled />
        </FormField>
        <FormField>
          <Label className="font-regular">Phone Number</Label>
          <Input disabled />
        </FormField>
      </div>
    </div>
  );
}
