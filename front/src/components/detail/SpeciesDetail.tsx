import { Species } from "@/models/Species";
import {
  Card,
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

export default function SpeciesDetail(species: Species) {
  return (
    <>
      <CardHeader>
        <CardTitle>{species.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <SectionTitle>Basic Information</SectionTitle>
        <Line label="Classification" value={species.classification} />
        <Line label="Designation" value={species.designation} />
        <Line label="Homeworld" value={species.homeworld} />
        <Line label="Language" value={species.language} />
        <SectionTitle>Physical Characteristics</SectionTitle>
        <Line label="Average Height" value={species.average_height} />
        <Line label="Skin Colors" value={species.skin_colors} />
        <Line label="Hair Colors" value={species.hair_colors} />
        <Line label="Eye Colors" value={species.eye_colors} />
        <Line label="Average Lifespan" value={species.average_lifespan} />
        <SectionTitle>Demographics</SectionTitle>
        <MultiLine label="People" values={species.people} />
        <SectionTitle>Media/Appearances</SectionTitle>
        <MultiLine label="Films" values={species.films} />
      </CardContent>
      <CardFooter className="justify-center">
        <CardDescription className="flex flex-col">
          <span>Created: {formatReadableDate(species.created)}</span>
          <span>Edited: {formatReadableDate(species.edited)}</span>
        </CardDescription>
      </CardFooter>
    </>
  );
}
