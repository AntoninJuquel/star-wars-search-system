import { Film } from "./Film";
import { People } from "./People";
import { Planet } from "./Planet";
import { Species } from "./Species";
import { Starship } from "./Starship";
import { Vehicle } from "./Vehicle";

export type Data = Film | Starship | Vehicle | People | Planet | Species;

export type CollectionData = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Data[];
};

export type ApiData = CollectionData | Record<string, CollectionData> | Data;

export type LoaderData = {
  id?: string | null;
  collection?: string | null;
  search?: string | null;
  page?: string | null;
  data?: ApiData | null;
};
