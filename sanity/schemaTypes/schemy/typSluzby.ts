import { defineType } from "sanity";

export default defineType({
  name: "sluzba",
  title: "TYP sluzba",
  type: "document",
  fields: [
    {
      type: "string",
      name: "Nazov"
    },
    {
      type: "string",
      name: "Popis"
    },
    {
      type: "image",
      name: "Obrazok"
    }
  ]
});