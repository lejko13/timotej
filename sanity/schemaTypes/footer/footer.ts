import { defineField, defineType } from "sanity";

export default defineType({
  name: "footer",
  title: "footer",
  type: "document",
  fields: [
   {
    name: "fotka",
  title: "Fotka",
  type: "image"
   }
  ]})