import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignupInfo() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <FormField>
          <Label className="font-regular">Email</Label>
          <Input />
        </FormField>
        <FormField>
          <Label className="font-regular">Password</Label>
          <Input isHiddenField />
        </FormField>
        <FormField>
          <Label className="font-regular">Confirm Password</Label>
          <Input isHiddenField />
        </FormField>
      </div>
    </div>
  );
}
