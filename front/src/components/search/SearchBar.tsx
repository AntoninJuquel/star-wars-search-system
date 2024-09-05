import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCallback, useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { LoaderData } from "@/models/LoaderData";
import { useDebouncedCallback } from "use-debounce";

const collections = [
  "all",
  "films",
  "people",
  "planets",
  "species",
  "starships",
  "vehicles",
];

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [collection, setCollection] = useState(collections[0]);
  const navigate = useNavigate();

  const handleSearch = useCallback(
    (collection: string, search: string) => {
      let url = `/search`;
      if (collection !== collections[0]) {
        url += `/${collection}`;
      }
      if (search) {
        url += `/?search=${search}`;
      }
      navigate(url);
    },
    [navigate]
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleSearch(collection, search);
  }

  const loaderData = useLoaderData();

  useEffect(() => {
    const { search, collection } = loaderData as LoaderData;
    if (search) {
      setSearch(search);
    }
    if (collection) {
      setCollection(collection);
    }
  }, [loaderData]);

  const debouncedSearch = useDebouncedCallback(
    (collection: string, search: string) => {
      handleSearch(collection, search);
    },
    500
  );

  return (
    <div id="searchbar">
      <Card className="w-full bg-white/10 backdrop-blur-lg">
        <form onSubmit={onSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex items-center mt-2 space-x-2">
                <Input
                  id="search"
                  placeholder="Browse the Empire database"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    debouncedSearch(collection, e.target.value);
                  }}
                />
                <Button variant="outline" type="submit" size="icon">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="collection">Collection</Label>
                <Select
                  onValueChange={(value) => {
                    setCollection(value);
                    handleSearch(value, search);
                  }}
                  value={collection}
                >
                  <SelectTrigger id="collection" className="w-[180px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    {collections.map((collection) => (
                      <SelectItem key={collection} value={collection}>
                        {collection}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
