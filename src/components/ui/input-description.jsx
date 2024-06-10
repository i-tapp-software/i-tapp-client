import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils/tw";

const inputDescriptionVariants = cva("text-sm", {
  variants: {
    variant: {
      error: "text-danger",
      default: "text-grey-4",
      warning: "text-warning",
      success: "text-success",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const InputDescription = React.forwardRef(
  ({ className, variant, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(inputDescriptionVariants({ variant }), className)}
      {...props}
    />
  )
);
InputDescription.displayName = InputDescription.displayName;

export { InputDescription };
