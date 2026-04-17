import blockContent from './blockContent'
import crewMember from './crewMember'
import castMember from './castMember'
import movie from './movie'
import person from './person'
import screening from './screening'
import plotSummary from './plotSummary'
import plotSummaries from './plotSummaries'
import zakladneinformacie  from './zakladneInformacie'
import header from './header'

import typSluzby from './schemy/typSluzby'
import skusenotsi from './skusenosti'
import Projekty from './projekty/projekty'



export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  header,
  zakladneinformacie,
 
  typSluzby,
  skusenotsi,
  Projekty,



  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
