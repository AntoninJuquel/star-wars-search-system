import { getNavigationUrl } from "@/lib/utils";
import { Film } from "@/models/Film";
import { Data } from "@/models/LoaderData";
import { Button } from "@/components/ui/button";

export default function SearchItem(
  item: Data,
  index: number,
  navigate: (to: string) => void
) {
  return (
    <Button
      key={index}
      variant="link"
      onClick={() => navigate(getNavigationUrl(item.url).slice(0, -1))}
      className="block"
    >
      {(item as Film).title || (item as Exclude<Data, Film>).name}
    </Button>
  );
}
