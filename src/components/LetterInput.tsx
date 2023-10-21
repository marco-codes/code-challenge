import { ComponentPropsWithoutRef, forwardRef } from "react";
import { LetterStatus } from "../constants/letterStatus";
import { twMerge } from "tailwind-merge";

interface LetterInputProps extends ComponentPropsWithoutRef<"input"> {
  status?: LetterStatus;
}

export const LetterInput = forwardRef<HTMLInputElement, LetterInputProps>(
  ({ className, disabled, status, ...props }, ref) => (
    <input
      ref={ref}
      className={twMerge(
        "bg-transparent text-white text-center w-14 h-14 bg-gray-600 text-3xl rounded-px uppercase font-bold",
        disabled ? "opacity-80" : "border border-white",
        status === LetterStatus.Correct && "bg-green-600",
        status === LetterStatus.WrongSpot && "bg-yellow-500",
        className
      )}
      disabled={disabled}
      type="text"
      maxLength={1}
      {...props}
    />
  )
);
