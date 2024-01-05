import React from "react";

const AddItemButton = ({ onClick, isFormVisible }) => {
  return (
    <button onClick={onClick}>
      {isFormVisible ? "Hide Form" : "Add Item"}
    </button>
  );
};
export default AddItemButton;