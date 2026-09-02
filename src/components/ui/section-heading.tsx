import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 space-y-4",
        align === "center" ? "text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary uppercase tracking-wider">
          {eyebrow}
        </span>
      )}
      <h2 className="text-4xl font-bold text-foreground md:text-5xl font-display">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-lg text-muted-foreground",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
