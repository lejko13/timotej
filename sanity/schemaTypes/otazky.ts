import {defineField, defineType} from 'sanity'
import {MdLocalMovies as icon} from 'react-icons/md'

export default defineType({

   name: 'Otazky',
  title: 'Otazky',
  type:"document",
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