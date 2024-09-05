import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatReadableDate } from "@/lib/utils";
import { People } from "@/models/People";
import { SectionTitle } from "@/components/common/SectionTitle";
import { Line } from "@/components/common/Line";
import { MultiLine } from "@/components/common/MultiLine";

export default function PeopleDetail(people: People) {
  const { films, starships, vehicles, species } = people;
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className="max-w-[50%] max-h-[95%] overflow-auto">
        <CardHeader>
          <CardTitle>{people.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <SectionTitle>Biographical Information</SectionTitle>
          <Line label="Homeworld" value={people.homeworld} />
          <Line label="Birth Year" value={people.birth_year} />
          <Line label="Gender" value={people.gender} />
          <SectionTitle>Physical Characteristics</SectionTitle>
          <Line label="Height" value={people.height} />
          <Line label="Mass" value={people.mass} />
          <Line label="Hair Color" value={people.hair_color} />
          <Line label="Skin Color" value={people.skin_color} />
          <Line label="Eye Color" value={people.eye_color} />
          <SectionTitle>Media/Appearances</SectionTitle>
          <MultiLine label="Films" values={films} />
          <MultiLine label="Species" values={species} />
          <MultiLine label="Vehicles" values={vehicles} />
          <MultiLine label="Starships" values={starships} />
        </CardContent>
        <CardFooter className="justify-center">
          <CardDescription className="flex flex-col">
            <span>Created: {formatReadableDate(people.created)}</span>
            <span>Edited: {formatReadableDate(people.edited)}</span>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
