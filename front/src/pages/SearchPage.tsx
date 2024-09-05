import SearchBar from "@/components/search/SearchBar";
import SearchResult from "@/components/search/SearchResult";

export default function SearchPage() {
  return (
    <div id="search-page" className="h-screen w-screen flex flex-col px-4 py-8 space-y-4">
      <SearchBar />
      <SearchResult />
    </div>
  );
}
