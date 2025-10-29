import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  url: string;
  title: string;
  description: string;
  date: string;
  thumbnail?: string;
  showRightBorder?: boolean;
}

export function BlogCard({
  url,
  title,
  description,
  date,
  thumbnail,
  showRightBorder = true,
}: BlogCardProps) {
  return (
    <Link
      href={url}
      className={cn(
        "group block w-[339px] flex flex-col rounded-[29.35px] aspect-square py-[26px] px-[28px] border border-muted",
        showRightBorder && "md:border-r border-border border-b-0"
      )}
    >
      <div className="flex flex-col gap-2 w-full">
        {thumbnail ? (
          <div className="relative w-[292px] h-[200px] rounded-[29.35px] overflow-hidden border border-muted border-b-0">
            <Image
              src={thumbnail}
              alt={title}
              fill
              className="object-cover"
              sizes="292px"
            />
          </div>
        ) : (
          <div className="w-[292px] h-[200px] rounded-[29.35px] bg-muted border border-muted border-b-0" />
        )}
        <span className="text-lg text-foreground font-semibold">{title}</span>
        <span className="text-sm text-foreground/60">{description}</span>
        <time className="block text-sm font-medium text-foreground/60">
          {date}
        </time>
      </div>
    </Link>
  );
}