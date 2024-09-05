import { useLoaderData, useNavigate } from "react-router-dom";
import { CollectionData, LoaderData } from "@/models/LoaderData";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { getNavigationUrl } from "@/lib/utils";
import SearchItem from "./SearchItem";
import { SectionTitle } from "@/components/common/SectionTitle";

function calculateTotalPages(count: number) {
  const totalPages = Math.ceil(count / 10);
  return totalPages;
}

export default function SearchResult() {
  const { data, collection, page } = useLoaderData() as LoaderData;
  const navigate = useNavigate();

  if (data) {
    if (collection) {
      const collectionData = data as CollectionData;
      if (collectionData.results.length === 0) {
        return (
          <div id="search-result">No results found. Please try again.</div>
        );
      }
      const totalPages = calculateTotalPages(collectionData.count);
      return (
        <div
          id="search-result"
          className="flex flex-col flex-grow overflow-y-auto bg-white/10 backdrop-blur-lg rounded-lg"
        >
          <div className="flex-grow p-2">
            {collectionData.results.map((item, index) =>
              SearchItem(item, index, navigate)
            )}
          </div>
          <Pagination>
            <PaginationContent>
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
      if (maxCount === 0) {
        return (
          <div id="search-result">No results found. Please try again.</div>
        );
      }
      const totalPages = calculateTotalPages(maxCount);
      return (
        <div
          id="search-result"
          className="flex flex-col flex-grow overflow-y-auto bg-white/10 backdrop-blur-lg rounded-lg"
        >
          <div className="flex-grow p-2">
            {Object.keys(collectionRecords).map((key, index) => {
              if (!collectionRecords[key].results) {
                return null;
              }
              if (collectionRecords[key].results.length === 0) {
                return null;
              }
              return (
                <div key={index}>
                  <SectionTitle>{key.toUpperCase()}</SectionTitle>
                  {collectionRecords[key].results.map((item, index) =>
                    SearchItem(item, index, navigate)
                  )}
                </div>
              );
            })}
          </div>
          <Pagination>
            <PaginationContent>
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
            </PaginationContent>
          </Pagination>
        </div>
      );
    }
  }

  return (
    <div
      id="search-result"
      className="flex flex-col flex-grow overflow-y-auto bg-white/10 backdrop-blur-lg rounded-lg p-4"
    >
      No results found. Please try again.
    </div>
  );
}
