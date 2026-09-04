import { Bell, BookOpen, Menu, Search, UserRound } from "lucide-react";
import { useState } from "react";

import NotificationsDrawer from "@/components/navigation/notifications";
import ProfileDrawer from "@/components/navigation/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type AppHeaderProps = {
  collapsed: boolean;
  mobileOpen: boolean;
  onMenuClick: () => void;
};

export default function AppHeader({
  collapsed,
  mobileOpen,
  onMenuClick,
}: AppHeaderProps) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <header className="relative z-30 h-18 shrink-0 bg-background">
        <div className="flex h-full items-center px-4 sm:px-6 lg:px-8">
          {/* Mobile menu */}
          {!mobileOpen && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="mr-2 size-10 shrink-0 rounded-xl lg:hidden"
              aria-label="Open navigation"
            >
              <Menu className="size-5" />
            </Button>
          )}

          {/* Collapsed desktop logo */}
          {collapsed && (
            <div className="mr-6 hidden items-center gap-2.5 lg:flex">
              <div className="flex size-9 items-center justify-center rounded-xl border bg-muted/40">
                <BookOpen className="size-4.5" />
              </div>

              <span className="text-base font-semibold tracking-tight">
                Learn_
              </span>
            </div>
          )}

          {/* Mobile logo */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <div className="flex size-9 items-center justify-center rounded-xl border bg-muted/40">
              <BookOpen className="size-4.5" />
            </div>

            <span className="text-base font-semibold tracking-tight">
              Learn_
            </span>
          </div>

          {/* Search */}
          <div className="mx-auto flex w-full max-w-3xl justify-center px-3 sm:px-6">
            <div className="relative w-full">
              <Search
                className="
                  pointer-events-none
                  absolute left-3.5 top-1/2
                  size-4.5
                  -translate-y-1/2
                  text-muted-foreground
                "
              />

              <Input
                type="search"
                placeholder="Search anything you want to learn..."
                className="
                  h-11 w-full rounded-full border bg-muted/20
                  pl-10 pr-4 text-sm shadow-none
                  placeholder:text-muted-foreground/70
                  focus-visible:bg-background
                "
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-1">
            {/* Notifications */}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setNotificationsOpen(true)}
              className="relative size-10 rounded-xl"
              aria-label="Notifications"
            >
              <Bell className="size-4.5" />

              <span className="absolute right-2.5 top-2.5 size-1.5 rounded-full bg-primary" />
            </Button>

            {/* Profile */}
            <Button
              type="button"
              variant="ghost"
              onClick={() => setProfileOpen(true)}
              className="size-10 rounded-xl p-0"
              aria-label="Profile"
            >
              <span className="flex size-9 items-center justify-center rounded-full border bg-muted/40">
                <UserRound className="size-4.25" />
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Notifications */}
      <NotificationsDrawer
        open={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
      />

      {/* Profile */}
      <ProfileDrawer open={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
}
