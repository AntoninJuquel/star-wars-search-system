import { clsx, type ClassValue } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatReadableDate(isoDateString: string) {
  return dayjs(isoDateString).format("MMMM D, YYYY h:mm:ss A [GMT]");
}

export function getNavigationUrl(navigationUrl: string, page?: number): string {
  try {
    const url = new URL(navigationUrl);
    if (page) {
      url.searchParams.set("page", page.toString());
    }
    return `${url.pathname.replace("api", "search")}${url.search}`;
  } catch (e) {
    console.log(e);
    return "#";
  }
}