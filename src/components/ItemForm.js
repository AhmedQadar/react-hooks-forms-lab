import React from "react";
import { v4 as uuid } from "uuid";
import { useState } from "react";

function ItemForm({ onItemFormSubmit }) {

  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  const handleItemFormSubmit = (event) => {
    event.preventDefault();

    onItemFormSubmit({
      id: uuid(),
      name: itemName,
      category: itemCategory
    });
  };
  

  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  function handleCategoryChange(event) {
    setItemCategory(event.target.value);
  }

  
  return (
    <form className="NewItem" onSubmit={handleItemFormSubmit}>
      <label>
        Name:
        <input 
        type="text" 
        name="name" 
        value={itemName}
        onChange={handleNameChange}
        />
      </label>

      <label>
        Category:
        <select 
        name="category"
        value={itemCategory}
        onChange={handleCategoryChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
