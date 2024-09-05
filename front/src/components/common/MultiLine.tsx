import { Line } from "./Line";

export function MultiLine({
  label,
  values,
}: {
  label: string;
  values: string[];
}) {
  return values.map((value, index) => (
    <Line key={value} label={index === 0 ? label : ""} value={value} />
  ));
}
