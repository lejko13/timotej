import { defineType, defineField } from "sanity";

export default defineType({
  name: "otazkycast",
  title: "OtazkovaCast",
  type: "document",
  fields: [
    defineField({
      name: "otazka",
      title: "Otázka",
      type: "string",
    }),
    defineField({
      name: "odpoved",
      title: "Odpoveď",
      type: "text",
    }),
  ],
});