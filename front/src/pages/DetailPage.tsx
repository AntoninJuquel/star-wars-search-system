import { useLoaderData, useNavigate } from "react-router-dom";
import { Data, LoaderData } from "@/models/LoaderData";
import FilmDetail from "@/components/detail/FilmDetail";
import PeopleDetail from "@/components/detail/PeopleDetail";
import PlanetDetail from "@/components/detail/PlanetDetail";
import SpeciesDetail from "@/components/detail/SpeciesDetail";
import StarshipDetail from "@/components/detail/StarshipDetail";
import VehicleDetail from "@/components/detail/VehicleDetail";
import { Button } from "@/components/ui/button";
import { Search, Undo } from "lucide-react";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Card } from "@/components/ui/card";

function getDetailComponent(collection: string) {
  switch (collection) {
    case "films":
      return FilmDetail;
    case "people":
      return PeopleDetail;
    case "planets":
      return PlanetDetail;
    case "species":
      return SpeciesDetail;
    case "starships":
      return StarshipDetail;
    case "vehicles":
      return VehicleDetail;
    default:
      return null;
  }
}

export default function DetailPage() {
  const { collection, data } = useLoaderData() as LoaderData;
  const navigate = useNavigate();
  if (!data) {
    return <div>Not found</div>;
  }
  if (!(data as Data).url) {
    return <div>Not found</div>;
  }
  if (!collection) {
    return <div>Not found</div>;
  }
  const DetailComponent = getDetailComponent(collection);
  if (!DetailComponent) {
    return <div>Not found</div>;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const item = data as any;
  return (
    <>
      <Button
        size="icon"
        className="absolute top-0 left-0 m-4"
        onClick={() => window.history.back()}
      >
        <Undo className="w-4 h-4" />
      </Button>
      <Button
        size="icon"
        className="absolute top-0 left-12 m-4"
        onClick={() => navigate("/search")}
      >
        <Search className="w-4 h-4" />
      </Button>
      <div className="flex flex-col items-center justify-center w-screen h-screen">
        <SectionTitle>{collection.toUpperCase()}</SectionTitle>
        <Card className="max-w-[50%] max-h-[95%] overflow-auto mt-2">
          <DetailComponent {...item} />
        </Card>
      </div>
    </>
  );
}
