import {defineArrayMember, defineType} from 'sanity'

export default defineType({
  title: 'ProjetkyUVODNA',
  name: 'ProjetkyUVODNA',
  type: 'document',
  fields:[{
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
]


})