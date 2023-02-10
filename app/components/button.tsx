import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  //always apply this styles
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    //style variation
    variants: {
      variant: {
        default:
          "bg-blue-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-blue-900",
        outline:
          "bg-transparent-border border-slate-200 hover:bg-slate-100 dark:border-slate-700",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ className, size, variant, ...props }) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
