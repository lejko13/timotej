import { defineType } from "sanity";

export default defineType({
  name: "Swipercast",
  title: "Swipercast",
  type: "document",
  fields: [
    {
      name: "Fotka",
      type: "image",
    },
  ]})