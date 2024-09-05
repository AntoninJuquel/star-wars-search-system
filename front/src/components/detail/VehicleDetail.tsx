import { Vehicle } from "@/models/Vehicle";
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

export default function VehicleDetail(vehicle: Vehicle) {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className="max-w-[50%] max-h-[95%] overflow-auto">
        <CardHeader>
          <CardTitle>{vehicle.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <SectionTitle>Basic Information</SectionTitle>
          <Line label="Model" value={vehicle.model} />
          <Line label="Vehicle Class" value={vehicle.vehicle_class} />
          <Line label="Manufacturer" value={vehicle.manufacturer} />
          <SectionTitle>Technical Specifications</SectionTitle>
          <Line label="Cost in Credits" value={vehicle.cost_in_credits} />
          <Line label="Length" value={vehicle.length} />
          <Line
            label="Max Atmosphering Speed"
            value={vehicle.max_atmosphering_speed}
          />
          <SectionTitle>Capacity</SectionTitle>
          <Line label="Crew" value={vehicle.crew} />
          <Line label="Passengers" value={vehicle.passengers} />
          <Line label="Cargo Capacity" value={vehicle.cargo_capacity} />
          <Line label="Consumables" value={vehicle.consumables} />
          <SectionTitle>Media/Appearances</SectionTitle>
          <MultiLine label="Pilots" values={vehicle.pilots} />
          <MultiLine label="Films" values={vehicle.films} />
        </CardContent>
        <CardFooter className="justify-center">
          <CardDescription className="flex flex-col">
            <span>Created: {formatReadableDate(vehicle.created)}</span>
            <span>Edited: {formatReadableDate(vehicle.edited)}</span>
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}
