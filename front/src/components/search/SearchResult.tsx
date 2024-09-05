import { useLoaderData, useNavigate } from "react-router-dom";
import { CollectionData, Data, LoaderData } from "@/models/LoaderData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Film } from "@/models/Film";
import { getNavigationUrl } from "@/lib/utils";

function calculateTotalPages(count: number) {
  const totalPages = Math.ceil(count / 10);
  return totalPages;
}

function ItemRenderer(
  item: Data,
  index: number,
  navigate: (to: string) => void
) {
  return (
    <div
      key={index}
      className="p-4 border-b border-gray-800"
      onClick={() => navigate(getNavigationUrl(item.url).slice(0, -1))}
    >
      {(item as Film).title || (item as Exclude<Data, Film>).name}
    </div>
  );
}

export default function SearchResult() {
  const { data, collection, page } = useLoaderData() as LoaderData;
  const navigate = useNavigate();

  if (data) {
    if (collection) {
      const collectionData = data as CollectionData;
      const totalPages = calculateTotalPages(collectionData.count);
      return (
        <div
          id="search-result"
          className="flex flex-col flex-grow overflow-y-auto"
        >
          <div className="flex-grow">
            {collectionData.results.map((item, index) =>
              ItemRenderer(item, index, navigate)
            )}
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={getNavigationUrl(collectionData.previous as string)}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href={getNavigationUrl(location.href, pageNumber)}
                      isActive={pageNumber === parseInt(page || "1")}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  href={getNavigationUrl(collectionData.next as string)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      );
    } else {
      const collectionRecords = data as Record<string, CollectionData>;
      const maxCount = Math.max(
        ...Object.keys(collectionRecords).map(
          (key) => collectionRecords[key].count || 0
        )
      );
      const totalPages = calculateTotalPages(maxCount);
      return (
        <div
          id="search-result"
          className="flex flex-col flex-grow overflow-y-auto"
        >
          <div className="flex-grow">
            {Object.keys(collectionRecords).map((key, index) => {
              if (!collectionRecords[key].results) {
                return null;
              }
              if (collectionRecords[key].results.length === 0) {
                return null;
              }
              return (
                <div key={index}>
                  <h2 className="text-xl font-bold">{key.toUpperCase()}</h2>
                  {collectionRecords[key].results.map((item, index) =>
                    ItemRenderer(item, index, navigate)
                  )}
                </div>
              );
            })}
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={getNavigationUrl(
                    location.href,
                    parseInt(page || "1") - 1
                  )}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      href={getNavigationUrl(location.href, pageNumber)}
                      isActive={pageNumber === parseInt(page || "1")}
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                )
              )}
              <PaginationItem>
                <PaginationNext
                  href={getNavigationUrl(
                    location.href,
                    parseInt(page || "1") + 1
                  )}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      );
    }
  }

  return <div id="search-result">No results found. Please try again.</div>;
}
