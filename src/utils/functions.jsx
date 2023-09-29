import { categoriesSearch } from "./constants"

export const getBorderCategory = (blog) => {
  const cat = categoriesSearch.filter(cat =>  cat.name === blog.category)
  return cat[0].border
}

export const getColorCategory = (blog) => {
  const cat = categoriesSearch.filter(cat =>  cat.name === blog.category)
  return cat[0].color
}

export const getIconCategory = (blog) => {
  const cat = categoriesSearch.filter(cat =>  cat.name === blog.category)
  return cat[0].icon
}
