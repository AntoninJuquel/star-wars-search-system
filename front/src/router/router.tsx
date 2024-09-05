import DetailPage from "@/pages/DetailPage";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/LoginPage";
import SearchPage from "@/pages/SearchPage";
import { createBrowserRouter, LoaderFunction } from "react-router-dom";
import { search as apiSearch } from "@/services/api";
import { LoaderData } from "@/models/LoaderData";

const loader: LoaderFunction = async function ({
  params,
  request,
}): Promise<LoaderData> {
  const { collection, id } = params;
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  const page = url.searchParams.get("page");
  const data = await apiSearch(request.url);
  return { id, collection, search, page, data };
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <SearchPage />,
        loader,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader,
      },
      {
        path: "/search/:collection",
        element: <SearchPage />,
        loader,
      },
      {
        path: "/search/:collection/:id",
        element: <DetailPage />,
        loader,
      },
    ],
  },
]);

export default router;
