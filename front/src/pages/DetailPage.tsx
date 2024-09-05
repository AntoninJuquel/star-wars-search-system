import { useLoaderData } from "react-router-dom";
import { Data, LoaderData } from "@/models/LoaderData";
import FilmDetail from "@/components/detail/FilmDetail";
import PeopleDetail from "@/components/detail/PeopleDetail";
import PlanetDetail from "@/components/detail/PlanetDetail";
import SpeciesDetail from "@/components/detail/SpeciesDetail";
import StarshipDetail from "@/components/detail/StarshipDetail";
import VehicleDetail from "@/components/detail/VehicleDetail";
import { Film } from "@/models/Film";
import { People } from "@/models/People";
import { Planet } from "@/models/Planet";
import { Species } from "@/models/Species";
import { Starship } from "@/models/Starship";
import { Vehicle } from "@/models/Vehicle";

export default function DetailPage() {
  const { collection, data } = useLoaderData() as LoaderData;
  if (!data) {
    return <div>Not found</div>;
  }
  if (!(data as Data).url) {
    return <div>Not found</div>;
  }
  switch (collection) {
    case "films":
      return <FilmDetail {...(data as Film)} />;
    case "people":
      return <PeopleDetail {...(data as People)} />;
    case "planets":
      return <PlanetDetail {...(data as Planet)} />;
    case "species":
      return <SpeciesDetail {...(data as Species)} />;
    case "starships":
      return <StarshipDetail {...(data as Starship)} />;
    case "vehicles":
      return <VehicleDetail {...(data as Vehicle)} />;
    default:
      return <div>Not found</div>;
  }
}
