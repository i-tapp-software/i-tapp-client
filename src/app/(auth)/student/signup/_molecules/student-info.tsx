import { FormField } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function StudentInfo({ studentData }) {
  // Extract the nested data
  const { name, course, matriculation, phone } = studentData.data.data;

  // Assuming name follows the "First Last" format, you can split it if necessary
  const firstName = name?.split(" ")[0] || "First Name";
  const lastName = name?.split(" ")[1] || "Last Name";

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-5">
        <FormField>
          <Label className="font-regular">First name</Label>
          <Input type="text" value={firstName} disabled />
        </FormField>
        <FormField>
          <Label className="font-regular">Last name</Label>
          <Input type="text" value={lastName} disabled />
        </FormField>

        <FormField>
          <Label className="font-regular">Alternative Email</Label>
          <Input type="email" disabled />
        </FormField>
        <FormField>
          <Label className="font-regular">Matriculation Number</Label>
          <Input value={matriculation} disabled />
        </FormField>
        <FormField>
          <Label className="font-regular">Course</Label>
          <Input value={course} disabled />
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
          <Input value={phone} disabled />
        </FormField>
      </div>
      <Link href="/signin" className="text-primary">
        Proceed to Sign In
      </Link>
    </div>
  );
}
