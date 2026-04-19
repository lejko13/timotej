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
   },
   {
    type:"string",
    name:"BtnPocitactext"
  },
  {
    type:"string",
    name:"BtnMobiltext"
  },
  {
    type:"string",
    name:"Hlavnytext"
  },
  {
    type:"string",
    name:"Malytext"
  },


  ]})