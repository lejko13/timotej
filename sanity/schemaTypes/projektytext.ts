import { defineType, defineField } from "sanity";

export default defineType({
  name: "projektytext",
  title: "projektytext",
  type: "document",
  fields:[{
    name:"Vrchnytext",
    type:"string",
  },
  {
  name:"Spodnytext",
  type:"string"
  },
  {
  name:"Fotka",
  type:"image"
  }
 
]
})