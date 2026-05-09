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
import ProjetkyUVODNA from './projektymaintext/projektymaintext'
import SluzbyUvodna from './sluzbaUvod/sluzbaUvod'
import Otazky from './otazky'
import otazkycast from './otazkovacast'
import footer from './footer/footer'
import projektytext from './projektytext'
import Swipercast from './swipercastvvrch'


export const schemaTypes = [
  // Document types
  movie,
  person,
  screening,
  header,
  footer,
  Otazky,
otazkycast,
projektytext,
  zakladneinformacie,
 
  typSluzby,
  skusenotsi,
  Projekty,
  SluzbyUvodna,
  ProjetkyUVODNA,



  // Other types
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
