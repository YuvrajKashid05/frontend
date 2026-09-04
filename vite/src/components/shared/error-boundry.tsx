import { AlertTriangle, RefreshCw } from "lucide-react";
import { Component, type ErrorInfo, type ReactNode } from "react";

import { Button } from "@/components/ui/button";

type ErrorBoundaryProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Learn_ Error Boundary:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
    });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="flex min-h-svh items-center justify-center bg-background px-6 text-foreground">
          <div className="flex w-full max-w-md flex-col items-center text-center">
            <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
              <AlertTriangle className="size-7" aria-hidden="true" />
            </div>

            <h1 className="text-xl font-semibold tracking-tight">
              Something went wrong
            </h1>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              An unexpected error occurred while displaying this page. Please
              try again.
            </p>

            <Button
              className="mt-6"
              variant="outline"
              onClick={this.handleRetry}
            >
              <RefreshCw className="size-4" />
              Try again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
