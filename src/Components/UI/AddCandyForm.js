import React, { useState } from "react";
import { useCandy } from "../CandyContext";
import AddItemButton from "./AddItemButton";
import classes from './AddCandyForm.module.css'
const AddCandyForm = () => {
  const { addCandy } = useCandy();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      return;
    }

    const newCandy = { name, description, price };
    addCandy(newCandy);

    setName("");
    setDescription("");
    setPrice(0);
    setIsFormVisible(false);
  };

  return (
    <div className={classes.formContainer}>
      <AddItemButton
        onClick={() => setIsFormVisible(!isFormVisible)}
        isFormVisible={isFormVisible}
      />
      {isFormVisible && (
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.formContainer}>
            <label className={classes.label}>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.input}
            />
          </div>
          <div className={classes.formContainer}>
            <label  className={classes.label}>Description:</label>
            <input
              type="text"
              value={description}
              className={classes.input}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div >
          <div className={classes.formContainer}>
            <label className={classes.label}>Price:</label>
            <input
              type="number"
              value={price}
              className={classes.input}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" className={classes.button}>Add Candy</button>
        </form>
      )}
    </div>
  );
};

export default AddCandyForm;