import { motion } from "framer-motion";
import { Bookmark, BookOpen, MoreHorizontal, Play, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const bookmarks = [
  {
    title: "Complete React Course",
    category: "Web Development",
    type: "Video",
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80",
    duration: "3h 42m",
    progress: 64,
  },
  {
    title: "Python Data Analysis",
    category: "Data Science",
    type: "Learning Path",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    duration: "12 lessons",
    progress: 42,
  },
  {
    title: "Machine Learning Fundamentals",
    category: "AI & ML",
    type: "Video",
    thumbnail:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=80",
    duration: "48m",
    progress: 28,
  },
  {
    title: "Docker for Developers",
    category: "Cloud & DevOps",
    type: "Learning Path",
    thumbnail:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=900&q=80",
    duration: "18 lessons",
    progress: 18,
  },
  {
    title: "SQL Complete Guide",
    category: "Data Science",
    type: "Video",
    thumbnail:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80",
    duration: "2h 14m",
    progress: 73,
  },
  {
    title: "Git & GitHub Essentials",
    category: "Programming",
    type: "Learning Path",
    thumbnail:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=900&q=80",
    duration: "10 lessons",
    progress: 100,
  },
];

const filters = ["All", "Videos", "Learning Paths"];

export default function BookmarksPage() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-375 px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        {/* Header */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="hidden size-11 shrink-0 items-center justify-center rounded-xl border bg-muted/40 sm:flex">
              <Bookmark className="size-5" />
            </div>

            <div>
              <p className="mb-1 text-sm font-medium text-muted-foreground">
                Saved
              </p>

              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Your bookmarks
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
                Keep the resources you want to come back to while learning.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Controls */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-9 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search your bookmarks..."
              className="h-11 rounded-xl bg-muted/20 pl-10 shadow-none"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1">
            {filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={[
                  "flex h-9 shrink-0 items-center rounded-xl px-3.5 text-sm font-medium transition-colors",
                  index === 0
                    ? "bg-foreground text-background"
                    : "border bg-card text-muted-foreground hover:bg-muted hover:text-foreground",
                ].join(" ")}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.section>

        {/* Summary */}
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Saved resources
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              {bookmarks.length} resources saved for later.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
            <Bookmark className="size-4" />
            {bookmarks.length} saved
          </div>
        </motion.section>

        {/* Bookmark grid */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {bookmarks.map((item, index) => (
            <BookmarkCard key={item.title} item={item} index={index} />
          ))}
        </section>
      </div>
    </div>
  );
}

function BookmarkCard({
  item,
  index,
}: {
  item: (typeof bookmarks)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
      }}
      whileHover={{ y: -3 }}
      className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow duration-200 hover:border-foreground/15 hover:shadow-md"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={item.thumbnail}
          alt=""
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />

        {/* Type */}
        <div className="absolute left-3 top-3 rounded-lg border border-white/10 bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur-md">
          {item.type}
        </div>

        {/* Play */}
        <div className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm backdrop-blur-md">
          {item.type === "Video" ? (
            <Play className="ml-0.5 size-4 fill-current" />
          ) : (
            <BookOpen className="size-4" />
          )}
        </div>

        {/* Bookmark */}
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="absolute right-3 top-3 size-9 rounded-lg bg-background/90 shadow-sm backdrop-blur-md hover:bg-background"
          aria-label={`Remove ${item.title} from bookmarks`}
        >
          <Bookmark className="size-4 fill-current" />
        </Button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold tracking-tight">
              {item.title}
            </h3>

            <p className="mt-1 text-xs text-muted-foreground">
              {item.category}
            </p>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="size-8 shrink-0 rounded-lg"
            aria-label="More options"
          >
            <MoreHorizontal className="size-4" />
          </Button>
        </div>

        <div className="mt-5">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">
              {item.progress === 100
                ? "Completed"
                : `${item.progress}% complete`}
            </span>

            <span className="text-muted-foreground">{item.duration}</span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-foreground transition-all"
              style={{ width: `${item.progress}%` }}
            />
          </div>
        </div>

        <div className="mt-4 border-t pt-4">
          <button
            type="button"
            className="text-xs font-medium text-foreground transition-opacity hover:opacity-70"
          >
            {item.progress === 100 ? "Review resource" : "Continue learning"}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
