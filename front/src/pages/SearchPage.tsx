import SearchBar from "@/components/search/SearchBar";
import SearchResult from "@/components/search/SearchResult";

export default function SearchPage() {
  return (
    <div id="search-page" className="h-screen w-screen flex flex-col">
      <SearchBar />
      <SearchResult />
    </div>
  );
}
