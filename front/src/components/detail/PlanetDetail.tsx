import { Planet } from "@/models/Planet";
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

export default function PlanetDetail(planet: Planet) {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className="max-w-[50%] max-h-[95%] overflow-auto">
        <CardHeader>
          <CardTitle>{planet.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <SectionTitle>Physical Properties</SectionTitle>
          <Line label="Rotation Period" value={planet.rotation_period} />
          <Line label="Orbital Period" value={planet.orbital_period} />
          <Line label="Diameter" value={planet.diameter} />
          <Line label="Gravity" value={planet.gravity} />
          <Line label="Climate" value={planet.climate} />
          <Line label="Terrain" value={planet.terrain} />
          <Line label="Surface Water" value={planet.surface_water} />
          <SectionTitle>Demographics</SectionTitle>
          <Line label="Population" value={planet.population} />
          <MultiLine label="Residents" values={planet.residents} />
          <SectionTitle>Other</SectionTitle>
          <MultiLine label="Films" values={planet.films} />
        </CardContent>
        <CardFooter className="justify-center">
          <CardDescription className="flex flex-col">
            <span>Created: {formatReadableDate(planet.created)}</span>
            <span>Edited: {formatReadableDate(planet.edited)}</span>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
