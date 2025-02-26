import type { ComponentPropsWithRef, FC, PropsWithChildren } from "react";
import { tv } from "tailwind-variants";

type BaseProps = PropsWithChildren<{
  /**
   * ボタンの種類
   */
  variant?: "primary" | "secondary" | "danger";
  /**
   * ボタンのサイズ
   */
  size?: "small" | "medium" | "large";
  className?: string;
}>;

const button = tv({
  base: "font-semibold rounded-md transition-all duration-200 hover:cursor-pointer disabled:hover:cursor-not-allowed",
  variants: {
    variant: {
      primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
      secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:bg-gray-50",
      danger: "bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300",
    },
    size: {
      small: "px-3 py-1.5 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
    },
  },
});

export type Props = Omit<ComponentPropsWithRef<"button">, keyof BaseProps> & BaseProps;

export const Button: FC<Props> = ({
  variant = "primary",
  size = "medium",
  disabled,
  className,
  children,
  ...props
}) => {
  return (
    <button className={button({ variant, size, className })} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

Button.displayName = "Button";
