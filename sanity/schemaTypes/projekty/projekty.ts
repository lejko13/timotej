import { defineField, defineType } from "sanity";

export default defineType({
  name: "Projekty",
  title: "Projekty",
  type: "document",
  fields: [
   { 
    name :"Fotka",
   type: "image",
   },
   {
    name:"NazovProjektu",
    type:"string"
   },
   {
     name:"Popis",
    type:"string"
   }
  ],
});