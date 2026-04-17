import {defineArrayMember, defineType} from 'sanity'

export default defineType({
  name: "zakladneInformacie",
  title: "ZakladneInformacie",
  type: "document",
  fields:[
   {name:"Adresa",type:"string"},
   {name:"TelCislo",type:"number"},
   {name:"Email",type:"string"},
   {name:"OdkazyNaSocialneSiete",
    type:"array",
    of: [
    {
      type: "object",
      fields: [
        {
          name: "NazovSocialnejsiete",
          title: "Názov",
          type: "string",
        },
        {
          name: "PriamoOdkaz",
          title: "Odkaz",
          type: "url",
        },
      ]}],
  },
   
  ]
});