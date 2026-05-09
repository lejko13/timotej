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
      name:"NadpisUvod",
      type: "string",
    },
    {
      name:"PopsiDlhy",
      type: "string",
    },

      {
      name: "PopisKratkyUvod",
      type: "string",
    },

    

     {
      name: "InterierInfo",
      title: "Interiér info",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "Nazov",
              type: "string",
            },
            {
              name: "Hodnota",
              type: "string",
            },
            {
              name: "Ikona",
              type: "string",
            },
            
          ],
        },
      ],
    },

     {
      name: "Galeria",
      title: "Galéria",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
          ],
        },
      ],
    },

    

    {
      name: "Rok",
      type: "number",
    },
    {
      name: "Style",
      type: "string",

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