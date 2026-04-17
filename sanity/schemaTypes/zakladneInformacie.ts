import {defineArrayMember, defineType} from 'sanity'

export default defineType({
  name: "zakladneInformacie",
  title: "ZakladneInformacie",
  type: "document",
  fields:[
    {name:"LogoNazovWebu",type:"string"},

    {name:"UvodnyText",type:"string"},
    {name:"NizzsieText",type:"string"},
  ]
});