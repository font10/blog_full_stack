import { all, cascada, castillo, montana, sombrilla, via_lactea } from '../utils/images.jsx'

export const categories = [
  'Mountain',
  'Waterfall',
  'Coast',
  'Milky way',
  'Architecture',
]

export const categoriesSearch = [
  { name: 'All', icon: all, border: 'purple-500', color: 'text-purple-500', },
  { name: 'Mountain', icon: montana, border: 'grey-500', color: 'text-grey-500', },
  { name: 'Waterfall', icon: cascada, border: 'blue-500', color: 'text-blue-500', },
  { name: 'Coast', icon: sombrilla, border: 'orange-500', color: 'text-orange-500', },
  { name: 'Milky way', icon: via_lactea, border: 'purple-500', color: 'text-purple-500', },
  { name: 'Architecture', icon: castillo, border: 'brown-500', color: 'text-brown-500', },
]