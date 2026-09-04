import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

type PageLoaderProps = {
  label?: string;
  className?: string;
};

export default function PageLoader({
  label = "Loading...",
  className,
}: PageLoaderProps) {
  return (
    <div
      className={cn(
        "flex min-h-[50vh] w-full items-center justify-center",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-3">
        <Loader2
          className="size-6 animate-spin text-primary"
          aria-hidden="true"
        />

        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
