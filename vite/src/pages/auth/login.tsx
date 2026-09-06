import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/auth-context";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const user = await login({ email: email.trim(), password });
      navigate(user.role === "STUDENT" ? "/home" : "/manager", { replace: true });
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background px-6 py-10 text-foreground sm:py-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 size-130 -translate-x-1/2 translate-y-[-58%] rounded-full bg-primary/9 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 size-115 -translate-x-1/2 translate-y-[62%] rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,hsl(var(--primary)/0.035),transparent_42%)]" />
      </div>
      <div className="relative z-10 w-full max-w-105">
        <div className="mb-9 flex flex-col items-center text-center sm:mb-6">
          <div className="mb-4 flex size-11 items-center justify-center rounded-xl border bg-background/70 shadow-sm backdrop-blur-sm">
            <BookOpen className="size-5" />
          </div>
          <h1 className="text-xl font-semibold tracking-[-0.02em]">Learn_</h1>
        </div>
        <div className="mb-7 text-center sm:mb-8">
          <h2 className="text-3xl font-bold tracking-[-0.03em]">Welcome back</h2>
          <p className="mt-2.5 text-sm leading-6 text-muted-foreground">Sign in to continue your learning journey.</p>
        </div>
        <div className="rounded-2xl border bg-card/80 p-6 shadow-xl shadow-black/5 backdrop-blur-xl sm:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} disabled={submitting} className="h-11 bg-background/70" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Enter your password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} disabled={submitting} className="h-11 bg-background/70" />
              <div className="pt-0.5">
                <a href="/forgot-password" className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">Forgot password?</a>
              </div>
            </div>
            {error && <div role="alert" className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</div>}
            <Button type="submit" className="h-11 w-full" disabled={submitting}>
              {submitting ? "Signing in..." : "Sign in"}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </form>
        </div>
        <div className="mt-6 text-center sm:mt-7">
          <p className="text-sm text-muted-foreground">Don't have an account?{" "}<a href="/register" className="font-medium text-foreground underline-offset-4 transition-colors hover:underline">Create an account</a></p>
        </div>
        <p className="mx-auto mt-7 max-w-sm text-center text-xs leading-5 text-muted-foreground sm:mt-8">
          By continuing, you agree to our{" "}
          <button type="button" className="underline underline-offset-4 transition-colors hover:text-foreground">Terms of Service</button>{" "}and{" "}
          <button type="button" className="underline underline-offset-4 transition-colors hover:text-foreground">Privacy Policy</button>.
        </p>
      </div>
    </main>
  );
}
