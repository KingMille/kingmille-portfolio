import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/animations/MagneticButton";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<string, string> = {
      primary:
        "bg-gradient-to-r from-primary to-secondary text-white shadow-glow hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5",
      secondary:
        "bg-secondary text-white shadow-glow-secondary hover:shadow-lg hover:shadow-secondary/50 hover:-translate-y-0.5",
      outline:
        "border-2 border-primary text-primary hover:bg-primary hover:text-white",
      ghost: "text-foreground hover:bg-primary/10",
    };

    const sizes: Record<string, string> = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    return (
      <MagneticButton>
        <button
          ref={ref}
          type={type}
          className={cn(baseClasses, variants[variant], sizes[size], className)}
          {...props}
        />
      </MagneticButton>
    );
  }
);

Button.displayName = "Button";

export { Button };
