import { links, locales } from "./data";

export type SectionName = Omit<(typeof links)[number]["name"],"Projects">;
// export type SectionName = (typeof links)[number]["name"];
export type LocaleName = (typeof locales)[number];
