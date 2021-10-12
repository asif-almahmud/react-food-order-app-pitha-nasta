import { useState, useEffect, useContext } from "react";
import classes from "./AvailableSnacks.module.scss";
import { Card, AppContext } from "z-index";
import { SnackItem } from "components/snacks";

const { available_snacks_container, available_snacks_list } = classes;

const DUMMY_SNACKS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22,
    capacity: 5,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16,
    capacity: 8,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12,
    capacity: 10,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18,
    capacity: 4,
  },
];

export const AvailableSnacks = () => {
  const [snacksData, setSnacksData] = useState(DUMMY_SNACKS);

  return (
    <>
      {snacksData.length > 0 && (
        <div className={available_snacks_container}>
          <Card>
            <ul className={available_snacks_list}>
              {snacksData.map((snack) => (
                <SnackItem
                  id={snack.id}
                  key={snack.id}
                  name={snack.name}
                  description={snack.description}
                  price={snack.price}
                  capacity={snack.capacity}
                />
              ))}
            </ul>
          </Card>
        </div>
      )}
    </>
  );
};
