import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("flex justify-center items-center text-18 py-[10px] px-5 rounded-3xl w-fit", {
  variants: {
    intent: {
      primary: [
        "text-white",
        "primary-button",
      ],
      secondary: [
        "secondary-button",
      ],
    },
  },
  compoundVariants: [{ intent: "primary" }],
  defaultVariants: {
    intent: "primary",
  },
});

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({ intent, ...props }) => (
  <button className={button({ intent })} {...props} />
);
