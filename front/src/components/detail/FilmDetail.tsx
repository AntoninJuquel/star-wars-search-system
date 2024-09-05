import { Film } from "@/models/Film";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Line } from "@/components/common/Line";
import { MultiLine } from "@/components/common/MultiLine";
import { formatReadableDate } from "@/lib/utils";

export default function FilmDetail(film: Film) {
  return (
    <>
      <CardHeader>
        <CardTitle>{film.title}</CardTitle>
        <CardDescription>Episode: {film.episode_id}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <SectionTitle>Opening Crawl</SectionTitle>
        <CardDescription className="whitespace-pre-line text-center">
          {film.opening_crawl}
        </CardDescription>
        <SectionTitle>Production Details</SectionTitle>
        <Line label="Director" value={film.director} />
        <Line label="Producer" value={film.producer} />
        <Line label="Release Date" value={film.release_date} />
        <SectionTitle>Entities/Appearances</SectionTitle>
        <MultiLine label="Characters" values={film.characters} />
        <MultiLine label="Planets" values={film.planets} />
        <MultiLine label="Starships" values={film.starships} />
        <MultiLine label="Vehicles" values={film.vehicles} />
        <MultiLine label="Species" values={film.species} />
      </CardContent>
      <CardFooter className="justify-center">
        <CardDescription className="flex flex-col">
          <span>Created: {formatReadableDate(film.created)}</span>
          <span>Edited: {formatReadableDate(film.edited)}</span>
        </CardDescription>
      </CardFooter>
    </>
  );
}
