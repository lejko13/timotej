import { defineType } from "sanity";

export default defineType({
  name: "Header",
  title: "Header",
  type: "document",
  fields:[{
    type:"string",
    name:"Nazov"
  },
  {
      name:"Referecnie",
    type:"array",
    of:[{
      type:"reference",
      to:[{type:"sluzba"}]
    }]
  
  },
   {
        type:"boolean",
        name:"isActive"
    }

]
  
   

   
  
});
