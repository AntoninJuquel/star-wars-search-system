import { getNavigationUrl } from "@/lib/utils";

export function Line({ label, value }: { label: string; value: string }) {
  try {
    const url = new URL(value);
    const navigationUrl = getNavigationUrl(url.href).slice(0, -1);
    return (
      <div className="grid grid-cols-2 gap-2">
        <h3>{label}</h3>
        <a
          href={`${getNavigationUrl(url.href).slice(0, -1)}`}
          className="text-yellow-500 hover:text-yellow-600"
        >
          {location.origin}{navigationUrl}
        </a>
      </div>
    );
  } catch (e) {
    console.info(e);
    return (
      <div className="grid grid-cols-2 gap-2">
        <h3>{label}</h3>
        <span>{value}</span>
      </div>
    );
  }
}
