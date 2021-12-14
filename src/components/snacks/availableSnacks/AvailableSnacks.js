import { useState, useEffect, useContext } from "react";
import classes from "./AvailableSnacks.module.scss";
import { Card, AppContext } from "z-index";
import { SnackItem } from "components/snacks";

const { available_snacks_container, available_snacks_list } = classes;

export const AvailableSnacks = () => {
  const [availableSnacksData, setAvailableSnacks] = useState([
    {
      capacity: 100,
      name: "Chitoi Pitha",
      price: 10,
      shortDesc: "Highly porous and Delicious",
    },
    {
      capacity: 70,
      name: "Bhapa Pitha",
      price: 20,
      shortDesc: "Fine texture, tasty from inside in every bite",
    },
    {
      capacity: 40,
      name: "Narikeler Pitha (Fried)",
      price: 20,
      shortDesc: "Crispy and mouth watering taste",
    },
    {
      capacity: 40,
      name: "Narikeler Pitha (Boiled)",
      price: 20,
      shortDesc: "Soft, gummy, delicious",
    },
    {
      capacity: 30,
      name: "Pua Pitha",
      price: 10,
      shortDesc: "Reddish fried, crispy and oily",
    },
    {
      capacity: 60,
      name: "Khir Patishapta",
      price: 25,
      shortDesc: "Delicious",
    },
  ]);

  return (
    <>
      {availableSnacksData.length > 0 && (
        <div className={available_snacks_container}>
          <Card>
            <ul className={available_snacks_list}>
              {availableSnacksData.map((snack) => (
                <SnackItem
                  id={snack.id}
                  key={snack.id}
                  name={snack.name}
                  description={snack.shortDesc}
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
