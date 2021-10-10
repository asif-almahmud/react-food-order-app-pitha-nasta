import React from "react";
import classes from "./AvailableSnacks.module.scss";
import { Card } from "z-index";
import { SnackItem } from "components/snacks";

const { available_meals_container, available_meals_list } = classes;

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    capacity: 5,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    capacity: 8,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    capacity: 10,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    capacity: 4,
  },
];

export const AvailableSnacks = () => {
  return (
    <div className={available_meals_container}>
      <Card>
        <ul className={available_meals_list}>
          {DUMMY_MEALS.map((meal) => (
            <SnackItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              capacity={meal.capacity}
            />
          ))}
        </ul>
      </Card>
    </div>
  );
};
