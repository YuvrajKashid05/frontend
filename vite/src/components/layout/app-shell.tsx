import { useState, type ReactNode } from "react";

import AppHeader from "@/components/layout/app-header";
import AppSidebar from "@/components/layout/app-sidebar";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="h-svh w-full overflow-hidden bg-background text-foreground">
      <div className="flex h-full w-full">
        <AppSidebar
          collapsed={collapsed}
          onCollapsedChange={setCollapsed}
          mobileOpen={mobileOpen}
          onMobileOpenChange={setMobileOpen}
        />

        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <AppHeader
            collapsed={collapsed}
            mobileOpen={mobileOpen}
            onMenuClick={() => setMobileOpen(true)}
          />

          <main className="dashboard-scroll min-h-0 flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
