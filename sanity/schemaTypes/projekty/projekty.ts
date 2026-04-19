import { defineType } from "sanity";

export default defineType({
  name: "Projekty",
  title: "Projekty",
  type: "document",
  fields: [
    {
      name: "Fotka",
      type: "image",
    },
    {
      name: "NazovProjektu",
      type: "string",
    },
    {
      name: "Popis",
      type: "string",
    },
    {
      name: "Rok",
      type: "number",
    },
    {
      name: "Typ",
      type: "string",
    },

    // 👉 TU JE SLUG
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "NazovProjektu",
        maxLength: 96,
      },
    },

    {
      name: "IDENTIFIKATOR",
      type: "number",
    },
  ],
});