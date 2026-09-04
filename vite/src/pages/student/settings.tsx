import { motion } from "framer-motion";
import {
  Bell,
  BookOpen,
  ChevronRight,
  Globe2,
  Lock,
  LogOut,
  Settings,
  Shield,
  UserRound,
} from "lucide-react";
import type { ReactNode } from "react";

import PageContainer from "@/components/shared/page-container";

export default function SettingsPage() {
  return (
    <PageContainer className="max-w-4xl">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border bg-muted/40">
            <Settings className="size-4" aria-hidden="true" />
          </div>

          <div className="min-w-0">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Settings
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              Manage your preferences and account.
            </p>
          </div>
        </div>
      </motion.header>

      <div className="space-y-5">
        {/* Profile */}
        <SettingsSection
          title="Profile"
          description="Your account information."
        >
          <div className="flex items-center gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border bg-muted/50">
              <UserRound
                className="size-5 text-muted-foreground"
                aria-hidden="true"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium">Your profile</p>

              <p className="mt-0.5 text-xs text-muted-foreground">
                Manage your personal information.
              </p>
            </div>

            <button
              type="button"
              className="rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Edit
            </button>
          </div>
        </SettingsSection>

        {/* Learning */}
        <SettingsSection
          title="Learning"
          description="Customize your learning experience."
        >
          <div className="divide-y">
            <SettingsRow
              icon={<BookOpen className="size-4" />}
              title="Learning goals"
              description="Manage your weekly learning targets."
            />

            <SettingsRow
              icon={<Globe2 className="size-4" />}
              title="Language"
              description="Preferred language for your experience."
              value="English"
            />

            <SettingsRow
              icon={<BookOpen className="size-4" />}
              title="Content preferences"
              description="Manage the resources you prefer."
            />
          </div>
        </SettingsSection>

        {/* Notifications */}
        <SettingsSection
          title="Notifications"
          description="Choose which updates you receive."
        >
          <div className="divide-y">
            <ToggleRow
              icon={<Bell className="size-4" />}
              title="Learning reminders"
              description="Reminders to stay consistent."
              enabled
            />

            <ToggleRow
              icon={<Bell className="size-4" />}
              title="Weekly progress summary"
              description="A summary of your learning activity."
              enabled
            />

            <ToggleRow
              icon={<Bell className="size-4" />}
              title="New recommendations"
              description="Updates about relevant learning resources."
              enabled={false}
            />
          </div>
        </SettingsSection>

        {/* Security */}
        <SettingsSection
          title="Security"
          description="Manage your account security and privacy."
        >
          <div className="divide-y">
            <SettingsRow
              icon={<Lock className="size-4" />}
              title="Password"
              description="Change your account password."
            />

            <SettingsRow
              icon={<Shield className="size-4" />}
              title="Privacy"
              description="Manage your privacy preferences."
            />
          </div>
        </SettingsSection>

        {/* Sign out */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="pt-2"
        >
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <LogOut className="size-4" aria-hidden="true" />
            Sign out
          </button>
        </motion.div>
      </div>
    </PageContainer>
  );
}

function SettingsSection({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border bg-card shadow-sm"
    >
      <div className="border-b px-5 py-4 sm:px-6">
        <h2 className="text-sm font-semibold tracking-tight">{title}</h2>

        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
      </div>

      <div className="p-5 sm:p-6">{children}</div>
    </motion.section>
  );
}

function SettingsRow({
  icon,
  title,
  description,
  value,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  value?: string;
}) {
  return (
    <button
      type="button"
      className="group flex w-full items-center gap-3 py-4 text-left first:pt-0 last:pb-0 focus-visible:outline-none"
    >
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{title}</p>

        <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
      </div>

      {value && (
        <span className="hidden text-xs text-muted-foreground sm:block">
          {value}
        </span>
      )}

      <ChevronRight
        className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground"
        aria-hidden="true"
      />
    </button>
  );
}

function ToggleRow({
  icon,
  title,
  description,
  enabled,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  enabled: boolean;
}) {
  return (
    <div className="flex items-center gap-3 py-4 first:pt-0 last:pb-0">
      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium">{title}</p>

        <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label={`${title}: ${enabled ? "enabled" : "disabled"}`}
        className={[
          "relative h-5 w-9 shrink-0 rounded-full transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          enabled ? "bg-foreground" : "bg-muted",
        ].join(" ")}
      >
        <span
          aria-hidden="true"
          className={[
            "absolute top-0.5 size-4 rounded-full bg-background shadow-sm transition-transform",
            enabled ? "left-4.5" : "left-0.5",
          ].join(" ")}
        />
      </button>
    </div>
  );
}
