import type { InputHTMLAttributes } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const input = tv({
  base: "w-full rounded-md border transition-all duration-200 focus:outline-none focus:ring-2 disabled:hover:cursor-not-allowed disabled:opacity-70",
  variants: {
    variant: {
      primary: "border-gray-300 focus:border-blue-500 focus:ring-blue-200",
      error: "border-red-300 focus:border-red-500 focus:ring-red-200",
    },
    size: {
      small: "px-3 py-1.5 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

type BaseInputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | "className"
  | "disabled"
  | "placeholder"
  | "value"
  | "defaultValue"
  | "onChange"
  | "onBlur"
  | "onFocus"
  | "type"
  | "name"
  | "id"
>;

export type InputProps = BaseInputProps & VariantProps<typeof input>;

export const Input = ({ variant, size, className, disabled, ...props }: InputProps) => {
  return (
    <input
      className={input({ variant, size, className })}
      disabled={disabled}
      {...props}
    />
  );
};