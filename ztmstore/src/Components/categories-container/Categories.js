import React from 'react'
import Category_item from "../caterogy-item/Category_item"
import "./categories.style.scss"

export default function Categories({categories}) {

  return (
    <div>
       <div className="categories-container">
        {categories.map((category) => (
        <Category_item key={category.id} category={category} />
      ))}
    </div>
    </div>
  )
}
