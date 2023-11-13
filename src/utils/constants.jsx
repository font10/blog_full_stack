import { all, boat, bled, beach, coast, cascada, castillo, cogolls, fangar, lafosca, montana, sombrilla, via_lactea, santllorenc } from '../utils/images.jsx'
import { CgProfile, MdDashboard,  MdPlace, FaBloggerB } from '../utils/icons.jsx'

export const categories = [
  'Mountain',
  'Waterfall',
  'Coast',
  'Milky way',
  'Architecture',
]

export const categoriesSearch = [
  { name: 'All', icon: all, border: 'border-purple-500', color: 'text-purple-500', },
  { name: 'Mountain', icon: montana, border: 'border-grey-500', color: 'text-grey-500', },
  { name: 'Waterfall', icon: cascada, border: 'border-blue-500', color: 'text-blue-500', },
  { name: 'Coast', icon: sombrilla, border: 'border-orange-500', color: 'text-orange-500', },
  { name: 'Milky way', icon: via_lactea, border: 'border-purple-500', color: 'text-purple-500', },
  { name: 'Architecture', icon: castillo, border: 'border-brown-500', color: 'text-brown-500', },
]

export const cards = [
  { country: 'Spain', site: 'Delta de l\'Ebre', image: boat },
  { country: 'Slovenia', site: 'Lake Bled', image: bled },
  { country: 'Spain', site: 'Cala Canyet', image: coast },
  { country: 'Spain', site: 'Cala Illa Roja', image: beach },
  { country: 'Spain', site: 'Cogolls', image: cogolls },
  { country: 'Spain', site: 'Faro del Fangar', image: fangar },
  { country: 'Spain', site: 'Cala La Fosca', image: lafosca },
  { country: 'Spain', site: 'Sant Llorenç del Munt', image: santllorenc },
]

export const menusDashboard = [
  { name: 'Home', icon: <MdDashboard size={22} /> },
  { name: 'Blogs', icon: <FaBloggerB size={22} /> },
  { name: 'Places', icon: <MdPlace size={22} /> },
  { name: 'Profile', icon: <CgProfile size={22} /> },
]