import React, { Fragment } from "react";

import "./index.scss";

export default function IngredientList(props) {

  const ingredients = props.ingredient_list.filter(i => i.category_id == props.category).map(item => {
    return (
      <Fragment>
        <input id={item.name} name="ingredient" type="radio" value={item.name} />
        <label for={item.name}>{item.name}</label>
      </Fragment>
    )
  })

  return (
    <div class="recipe__form--radio">
      <div class="recipe__form--radio-container" value={props.ingredient} onChange={props.setIngredient}>
        {props.ingredient_list && ingredients}
      </div>
    </div>
  )
}