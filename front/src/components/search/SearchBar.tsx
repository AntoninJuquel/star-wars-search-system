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
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getCollections } from "@/services/api";
import { LoaderData } from "@/models/LoaderData";

export default function SearchBar() {
  const [collections, setCollections] = useState<string[]>(["all"]);
  const [search, setSearch] = useState("");
  const [collection, setCollection] = useState(collections[0]);
  const navigate = useNavigate();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    let url = `/search`;
    if (collection !== collections[0]) {
      url += `/${collection}`;
    }
    if (search) {
      url += `/?search=${search}`;
    }
    return navigate(url);
  }

  useEffect(() => {
    (async () => {
      const collections = await getCollections();
      if (collections) {
        setCollections([...new Set(["all", ...Object.keys(collections)])]);
      }
    })();
  }, []);

  const loaderData = useLoaderData();

  useEffect(() => {
    const { search, collection } = loaderData as LoaderData;
    if (search) {
      setSearch(search);
    }
    if (collection) {
      setCollection(collection);
    }
  }, [loaderData, collections]);

  return (
    <div id="searchbar">
      <Card className="w-full">
        <form onSubmit={handleSearch}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex items-center mt-2 space-x-2">
                <Input
                  id="search"
                  placeholder="Browse the Empire database"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="outline" type="submit" size="icon">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="collection">Collection</Label>
                <Select onValueChange={setCollection} value={collection}>
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
