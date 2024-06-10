import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils/tw";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-grey-1",
        outline:
          "bg-white border border-solid border-[#477DC0] hover:bg-grey-1 hover:text-white",
        secondary: "bg-secondary text-white hover:bg-grey-1",
        link: "bg-primary text-white hover:bg-grey-1 ",
      },
      size: {
        default: "h-16 px-[6.5rem] py-4 text-base",
        sm: "h-12 rounded-lg py-3.5 px-14 text-sm",
        normal: "p-14 py-4 px-20 text-base",
        md: "h-16 rounded-lg py-[.125rem] px-[5.625rem] text-md",
        lg: "h-16 rounded-lg px-[6.25rem] py-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
