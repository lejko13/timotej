import { defineField, defineType } from "sanity";

export default defineType({
  name: "skusenosti",
  title: "Skúsenosti",
  type: "document",
  fields: [
    defineField({
      name: "cislo",
      title: "Číslo",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "specialnyZnak",
      title: "Špeciálny znak (napr. %, +, K)",
      type: "string",
      validation: (Rule) => Rule.max(5),
    }),

    defineField({
      name: "popis",
      title: "Popis",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});