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
   },
   {
     name:"Rok",
    type:"number"
   },
   {
    name:"Typ",
    type:"string"
   },
   {
    name:"IDENTIFIKATOR",
    type:"number"
   }
  ],
});