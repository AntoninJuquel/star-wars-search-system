import { Starship } from "@/models/Starship";
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

export default function StarshipDetail(starship: Starship) {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className="max-w-[50%] max-h-[95%] overflow-auto">
        <CardHeader>
          <CardTitle>{starship.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <SectionTitle>Basic Information</SectionTitle>
          <Line label="Model" value={starship.model} />
          <Line label="Starship Class" value={starship.starship_class} />
          <Line label="Manufacturer" value={starship.manufacturer} />
          <SectionTitle>Technical Specifications</SectionTitle>
          <Line label="Cost in Credits" value={starship.cost_in_credits} />
          <Line label="Length" value={starship.length} />
          <Line label="Max Atmosphering Speed" value={starship.max_atmosphering_speed} />
          <Line label="Hyperdrive Rating" value={starship.hyperdrive_rating} />
          <Line label="MGLT" value={starship.MGLT} />
          <SectionTitle>Capacity</SectionTitle>
          <Line label="Crew" value={starship.crew} />
          <Line label="Passengers" value={starship.passengers} />
          <Line label="Cargo Capacity" value={starship.cargo_capacity} />
          <Line label="Consumables" value={starship.consumables} />
          <SectionTitle>Media/Appearances</SectionTitle>
          <MultiLine label="Pilots" values={starship.pilots} />
          <MultiLine label="Films" values={starship.films} />
        </CardContent>
        <CardFooter className="justify-center">
          <CardDescription className="flex flex-col">
            <span>Created: {formatReadableDate(starship.created)}</span>
            <span>Edited: {formatReadableDate(starship.edited)}</span>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
