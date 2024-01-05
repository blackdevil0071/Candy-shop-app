// AvailableMeals.js
import React from "react";
import Card from "../UI/Card";
import CandyItem from "./CandyItems/CandyItem";
import AddCandyForm from "../UI/AddCandyForm";
import { useCandy } from "../CandyContext";

const AvailableMeals = () => {
  const { candies } = useCandy();

  const candyList = candies.map((candy, index) => (
    <CandyItem
      key={index}
      name={candy.name}
      description={candy.description}
      price={candy.price}
    />
  ));
  return (
    <section>
      <AddCandyForm />
      <Card>
        <ul>{candyList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
